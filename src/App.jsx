import { useState, useEffect, useRef, useMemo } from "react";

// ─── inject fonts ───────────────────────────────────────────────────
const _l = document.createElement("link");
_l.rel = "stylesheet";
_l.href =
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@600;700;800&display=swap";
document.head.appendChild(_l);

// ─── theme tokens ────────────────────────────────────────────────────
const C = {
  bg: "#070710",
  s1: "#0d0d1a",
  s2: "#12121f",
  border: "#1e1e38",
  text: "#e2e4f3",
  muted: "#5a5a7a",
  brute: "#e05a6f",
  better: "#e89a2a",
  opt: "#29cc7a",
  accent: "#5b8df5",
  purple: "#9b72e8",
};

const TIER = {
  brute: { color: C.brute, label: "Brute Force" },
  better: { color: C.better, label: "Better" },
  opt: { color: C.opt, label: "Optimized" },
};

// ─── step generators ─────────────────────────────────────────────────

function stBubble(inp) {
  const a = [...inp], n = a.length, out = [], done = new Set();
  out.push({ a: [...a], hi: [], sw: [], done: [], msg: "Initialize — scan adjacent pairs", ln: 0 });
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      out.push({ a: [...a], hi: [j, j + 1], sw: [], done: [...done], msg: `Compare a[${j}]=${a[j]} vs a[${j+1}]=${a[j+1]}`, ln: 3 });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        out.push({ a: [...a], hi: [], sw: [j, j + 1], done: [...done], msg: `Swap → ${a[j+1]}, ${a[j]}`, ln: 4 });
      }
    }
    done.add(n - 1 - i);
    out.push({ a: [...a], hi: [], sw: [], done: [...done], msg: `Pass ${i+1} done — index ${n-1-i} locked in`, ln: 2 });
  }
  done.add(0);
  out.push({ a: [...a], hi: [], sw: [], done: [...done], msg: "✓ Array fully sorted!", ln: 8 });
  return out;
}

function stInsertion(inp) {
  const a = [...inp], n = a.length, out = [];
  out.push({ a: [...a], hi: [], sw: [], done: [0], msg: "Index 0 is trivially sorted", ln: 0 });
  for (let i = 1; i < n; i++) {
    const key = a[i]; let j = i - 1;
    out.push({ a: [...a], hi: [i], sw: [], done: Array.from({ length: i }, (_, k) => k), msg: `Key = a[${i}] = ${key}`, ln: 2 });
    while (j >= 0 && a[j] > key) {
      out.push({ a: [...a], hi: [j, j + 1], sw: [], done: [], msg: `a[${j}]=${a[j]} > key=${key}, shift right`, ln: 4 });
      a[j + 1] = a[j]; j--;
      out.push({ a: [...a], hi: [], sw: [j + 1], done: [], msg: `Shifted to pos ${j + 2}`, ln: 5 });
    }
    a[j + 1] = key;
    out.push({ a: [...a], hi: [], sw: [j + 1], done: Array.from({ length: i + 1 }, (_, k) => k), msg: `Inserted key=${key} at index ${j+1}`, ln: 7 });
  }
  out.push({ a: [...a], hi: [], sw: [], done: Array.from({ length: n }, (_, k) => k), msg: "✓ Array fully sorted!", ln: 9 });
  return out;
}

function stMerge(inp) {
  const a = [...inp], out = [];
  out.push({ a: [...a], hi: [], sw: [], done: [], msg: "Merge Sort — divide and conquer", ln: 0 });
  function merge(arr, l, m, r) {
    const L = arr.slice(l, m + 1), R = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    out.push({ a: [...arr], hi: [l, r], sw: [], done: [], msg: `Merging [${l}..${m}] & [${m+1}..${r}]`, ln: 8 });
    while (i < L.length && j < R.length) {
      out.push({ a: [...arr], hi: [l + i, m + 1 + j], sw: [], done: [], msg: `Compare ${L[i]} vs ${R[j]}`, ln: 10 });
      if (L[i] <= R[j]) arr[k++] = L[i++]; else arr[k++] = R[j++];
      out.push({ a: [...arr], hi: [], sw: [k - 1], done: [], msg: `Placed ${arr[k - 1]}`, ln: 11 });
    }
    while (i < L.length) { arr[k++] = L[i++]; out.push({ a: [...arr], hi: [], sw: [k - 1], done: [], msg: "Copy left remainder", ln: 13 }); }
    while (j < R.length) { arr[k++] = R[j++]; out.push({ a: [...arr], hi: [], sw: [k - 1], done: [], msg: "Copy right remainder", ln: 14 }); }
    out.push({ a: [...arr], hi: [], sw: [], done: Array.from({ length: r - l + 1 }, (_, x) => l + x), msg: `Merged segment [${l}..${r}]`, ln: 15 });
  }
  function ms(arr, l, r) {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      out.push({ a: [...arr], hi: [l, r], sw: [], done: [], msg: `Split [${l}..${r}] at mid=${m}`, ln: 3 });
      ms(arr, l, m); ms(arr, m + 1, r); merge(arr, l, m, r);
    }
  }
  ms(a, 0, a.length - 1);
  out.push({ a: [...a], hi: [], sw: [], done: Array.from({ length: a.length }, (_, k) => k), msg: "✓ Array fully sorted!", ln: 17 });
  return out;
}

function stLinear(arr, tgt) {
  const out = [{ arr, cur: -1, l: -1, r: -1, found: -1, msg: `Linear search for target = ${tgt}`, ln: 0 }];
  for (let i = 0; i < arr.length; i++) {
    out.push({ arr, cur: i, l: -1, r: -1, found: -1, msg: `Check arr[${i}] = ${arr[i]}`, ln: 2 });
    if (arr[i] === tgt) { out.push({ arr, cur: i, l: -1, r: -1, found: i, msg: `✓ Found ${tgt} at index ${i}!`, ln: 3 }); return out; }
  }
  out.push({ arr, cur: -1, l: -1, r: -1, found: -2, msg: `✗ ${tgt} not in array`, ln: 5 }); return out;
}

function stJump(inp, tgt) {
  const arr = [...inp].sort((a, b) => a - b), n = arr.length, step = Math.floor(Math.sqrt(n));
  let prev = 0, curr = step;
  const out = [{ arr, cur: -1, l: 0, r: step, found: -1, msg: `Jump step = √${n} ≈ ${step}`, ln: 0 }];
  while (curr < n && arr[Math.min(curr, n - 1)] < tgt) {
    const idx = Math.min(curr, n - 1);
    out.push({ arr, cur: idx, l: prev, r: idx, found: -1, msg: `Jump → index ${idx}: ${arr[idx]} < ${tgt}`, ln: 5 });
    prev = curr; curr += step;
  }
  const end = Math.min(curr, n - 1);
  out.push({ arr, cur: -1, l: prev, r: end, found: -1, msg: `Linear scan block [${prev}..${end}]`, ln: 8 });
  for (let i = prev; i <= end; i++) {
    out.push({ arr, cur: i, l: prev, r: end, found: -1, msg: `Check arr[${i}] = ${arr[i]}`, ln: 9 });
    if (arr[i] === tgt) { out.push({ arr, cur: i, l: prev, r: end, found: i, msg: `✓ Found at index ${i}!`, ln: 10 }); return out; }
  }
  out.push({ arr, cur: -1, l: -1, r: -1, found: -2, msg: `✗ ${tgt} not found`, ln: 12 }); return out;
}

function stBinary(inp, tgt) {
  const arr = [...inp].sort((a, b) => a - b);
  let l = 0, r = arr.length - 1;
  const out = [{ arr, cur: -1, l, r, found: -1, msg: `Binary search in sorted array for ${tgt}`, ln: 0 }];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    out.push({ arr, cur: m, l, r, found: -1, msg: `mid=${m} → arr[${m}]=${arr[m]}`, ln: 4 });
    if (arr[m] === tgt) { out.push({ arr, cur: m, l, r, found: m, msg: `✓ Found ${tgt} at index ${m}!`, ln: 5 }); return out; }
    if (arr[m] < tgt) { out.push({ arr, cur: m, l: m + 1, r, found: -1, msg: `${arr[m]} < ${tgt} → eliminate left half`, ln: 6 }); l = m + 1; }
    else { out.push({ arr, cur: m, l, r: m - 1, found: -1, msg: `${arr[m]} > ${tgt} → eliminate right half`, ln: 7 }); r = m - 1; }
  }
  out.push({ arr, cur: -1, l, r, found: -2, msg: `✗ ${tgt} not found`, ln: 9 }); return out;
}

function stTsBrute(arr, tgt) {
  const out = [{ arr, p1: -1, p2: -1, found: [], map: {}, msg: `Find pair summing to ${tgt} — try every pair`, ln: 0 }];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      out.push({ arr, p1: i, p2: j, found: [], map: {}, msg: `arr[${i}]=${arr[i]} + arr[${j}]=${arr[j]} = ${arr[i]+arr[j]}`, ln: 3 });
      if (arr[i] + arr[j] === tgt) { out.push({ arr, p1: i, p2: j, found: [i, j], map: {}, msg: `✓ Found! indices [${i}, ${j}]`, ln: 4 }); return out; }
    }
  out.push({ arr, p1: -1, p2: -1, found: [], map: {}, msg: "✗ No pair sums to target", ln: 6 }); return out;
}

function stTsTwo(inp, tgt) {
  const arr = [...inp].sort((a, b) => a - b); let l = 0, r = arr.length - 1;
  const out = [{ arr, p1: l, p2: r, found: [], map: {}, msg: "Sorted. Two pointers converging", ln: 0 }];
  while (l < r) {
    const s = arr[l] + arr[r];
    out.push({ arr, p1: l, p2: r, found: [], map: {}, msg: `arr[${l}]=${arr[l]} + arr[${r}]=${arr[r]} = ${s}`, ln: 4 });
    if (s === tgt) { out.push({ arr, p1: l, p2: r, found: [l, r], map: {}, msg: `✓ Found! [${l}, ${r}]`, ln: 5 }); return out; }
    if (s < tgt) { out.push({ arr, p1: l + 1, p2: r, found: [], map: {}, msg: `${s} < ${tgt}, move left →`, ln: 7 }); l++; }
    else { out.push({ arr, p1: l, p2: r - 1, found: [], map: {}, msg: `${s} > ${tgt}, move right ←`, ln: 9 }); r--; }
  }
  out.push({ arr, p1: l, p2: r, found: [], map: {}, msg: "✗ No pair found", ln: 11 }); return out;
}

function stTsHash(arr, tgt) {
  const map = {};
  const out = [{ arr, p1: -1, p2: -1, found: [], map: {}, msg: `HashMap approach — find pair = ${tgt}`, ln: 0 }];
  for (let i = 0; i < arr.length; i++) {
    const need = tgt - arr[i];
    out.push({ arr, p1: i, p2: -1, found: [], map: { ...map }, msg: `arr[${i}]=${arr[i]}, need complement = ${need}`, ln: 3 });
    if (need in map) { out.push({ arr, p1: i, p2: map[need], found: [map[need], i], map: { ...map }, msg: `✓ Found ${need} in map at index ${map[need]}!`, ln: 4 }); return out; }
    map[arr[i]] = i;
    out.push({ arr, p1: i, p2: -1, found: [], map: { ...map }, msg: `Store map[${arr[i]}] = ${i}`, ln: 6 });
  }
  out.push({ arr, p1: -1, p2: -1, found: [], map: {}, msg: "✗ Not found", ln: 8 }); return out;
}

function stFibRec(n) {
  let calls = 0;
  const out = [{ active: -1, memo: {}, table: null, calls: 0, result: null, msg: `Compute fib(${n}) recursively`, ln: 0 }];
  function fib(k) {
    calls++;
    out.push({ active: k, memo: {}, table: null, calls, result: null, msg: `fib(${k}) called — total calls: ${calls}`, ln: 1 });
    if (k <= 1) { out.push({ active: k, memo: {}, table: null, calls, result: k, msg: `Base case: fib(${k}) = ${k}`, ln: 2 }); return k; }
    const a = fib(k - 1), b = fib(k - 2), r = a + b;
    out.push({ active: k, memo: {}, table: null, calls, result: r, msg: `fib(${k}) = ${a} + ${b} = ${r}`, ln: 3 }); return r;
  }
  const res = fib(n);
  out.push({ active: -1, memo: {}, table: null, calls, result: res, msg: `✓ fib(${n}) = ${res} — needed ${calls} calls!`, ln: 4 });
  return out;
}

function stFibMemo(n) {
  const memo = {};
  const out = [{ active: -1, memo: {}, table: null, calls: 0, result: null, msg: `Memoized fib(${n})`, ln: 0 }];
  function fib(k) {
    if (k in memo) { out.push({ active: k, memo: { ...memo }, table: null, calls: 0, result: memo[k], msg: `Cache hit! memo[${k}] = ${memo[k]}`, ln: 1 }); return memo[k]; }
    out.push({ active: k, memo: { ...memo }, table: null, calls: 0, result: null, msg: `Compute fib(${k})`, ln: 3 });
    if (k <= 1) { memo[k] = k; out.push({ active: k, memo: { ...memo }, table: null, calls: 0, result: k, msg: `Base: fib(${k}) = ${k}, cached`, ln: 4 }); return k; }
    const r = fib(k - 1) + fib(k - 2); memo[k] = r;
    out.push({ active: k, memo: { ...memo }, table: null, calls: 0, result: r, msg: `fib(${k}) = ${r} — cached`, ln: 6 }); return r;
  }
  const res = fib(n);
  out.push({ active: -1, memo: { ...memo }, table: null, calls: 0, result: res, msg: `✓ fib(${n}) = ${res} — ${Object.keys(memo).length} unique computations`, ln: 8 });
  return out;
}

function stFibDP(n) {
  const sz = Math.max(n + 1, 2), dp = Array(sz).fill(0);
  dp[0] = 0; if (n >= 1) dp[1] = 1;
  const out = [{ active: -1, memo: {}, table: [...dp], calls: 0, result: null, msg: `DP table: dp[0]=0, dp[1]=1`, ln: 2 }];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    out.push({ active: i, memo: {}, table: [...dp], calls: 0, result: null, msg: `dp[${i}] = ${dp[i-1]} + ${dp[i-2]} = ${dp[i]}`, ln: 4 });
  }
  out.push({ active: -1, memo: {}, table: [...dp], calls: 0, result: dp[n], msg: `✓ fib(${n}) = dp[${n}] = ${dp[n]}`, ln: 6 });
  return out;
}

// ─── code snippets ────────────────────────────────────────────────────
const CODE = {
  bubbleSort: {
    js: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return arr; // O(n²) time
}`,
    py: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr  # O(n²)`,
    cpp: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
} // O(n²) time`,
    java: `void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
} // O(n²) time`,
  },
  insertionSort: {
    js: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr; // O(n) best case!
}`,
    py: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr  # O(n) best case`,
    cpp: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
} // O(n) best case`,
    java: `void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
} // O(n) best case`,
  },
  mergeSort: {
    js: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const L = mergeSort(arr.slice(0, mid));
  const R = mergeSort(arr.slice(mid));
  return merge(L, R);
}
// ── merge helper ──────────────────
function merge(L, R) {
  const res = []; let i = 0, j = 0;
  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) res.push(L[i++]);
    else res.push(R[j++]);
  }
  return [...res, ...L.slice(i), ...R.slice(j)];
} // O(n log n) always`,
    py: `def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    L = merge_sort(arr[:mid])
    R = merge_sort(arr[mid:])
    return merge(L, R)

def merge(L, R):
    result, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]: result.append(L[i]); i+=1
        else: result.append(R[j]); j+=1
    return result + L[i:] + R[j:]
# O(n log n) always`,
    cpp: `vector<int> mergeSort(vector<int> arr) {
    if (arr.size() <= 1) return arr;
    int mid = arr.size() / 2;
    auto L = mergeSort({arr.begin(), arr.begin()+mid});
    auto R = mergeSort({arr.begin()+mid, arr.end()});
    return merge(L, R);
}
// O(n log n) — stable sort`,
    java: `int[] mergeSort(int[] arr) {
    if (arr.length <= 1) return arr;
    int mid = arr.length / 2;
    int[] L = mergeSort(Arrays.copyOfRange(arr, 0, mid));
    int[] R = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
    return merge(L, R);
}
// O(n log n) — stable sort`,
  },
  linearSearch: {
    js: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // found!
    }
  }
  return -1; // O(n) worst case
}`,
    py: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # found!
    return -1  # O(n)`,
    cpp: `int linearSearch(int arr[], int n, int t) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == t) return i;
    }
    return -1; // O(n)
}`,
    java: `int linearSearch(int[] arr, int t) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == t) return i;
    }
    return -1; // O(n)
}`,
  },
  jumpSearch: {
    js: `function jumpSearch(arr, target) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0, curr = step;
  while (curr < n && arr[curr] < target) {
    prev = curr; curr += step; // jump!
  }
  for (let i = prev; i <= Math.min(curr, n-1); i++) {
    if (arr[i] === target) return i;
  }
  return -1; // O(√n)
}`,
    py: `import math
def jump_search(arr, target):
    arr.sort()
    n, step = len(arr), int(math.sqrt(len(arr)))
    prev, curr = 0, step
    while curr < n and arr[curr] < target:
        prev, curr = curr, curr + step
    for i in range(prev, min(curr, n-1)+1):
        if arr[i] == target: return i
    return -1  # O(√n)`,
    cpp: `int jumpSearch(int arr[], int n, int t) {
    sort(arr, arr+n);
    int step=sqrt(n), prev=0, curr=step;
    while(curr<n && arr[curr]<t){prev=curr;curr+=step;}
    for(int i=prev;i<=min(curr,n-1);i++)
        if(arr[i]==t) return i;
    return -1; // O(√n)
}`,
    java: `int jumpSearch(int[] arr, int t) {
    Arrays.sort(arr);
    int n=arr.length, step=(int)Math.sqrt(n);
    int prev=0, curr=step;
    while(curr<n&&arr[curr]<t){prev=curr;curr+=step;}
    for(int i=prev;i<=Math.min(curr,n-1);i++)
        if(arr[i]==t) return i;
    return -1; // O(√n)
}`,
  },
  binarySearch: {
    js: `function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // O(log n)
}`,
    py: `def binary_search(arr, target):
    arr.sort()
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1  # O(log n)`,
    cpp: `int binarySearch(int arr[], int n, int t) {
    sort(arr, arr+n);
    int l=0, r=n-1;
    while(l<=r){
        int m=(l+r)/2;
        if(arr[m]==t) return m;
        else if(arr[m]<t) l=m+1;
        else r=m-1;
    }
    return -1; // O(log n)
}`,
    java: `int binarySearch(int[] arr, int t) {
    Arrays.sort(arr);
    int l=0, r=arr.length-1;
    while(l<=r){
        int m=(l+r)/2;
        if(arr[m]==t) return m;
        else if(arr[m]<t) l=m+1;
        else r=m-1;
    }
    return -1; // O(log n)
}`,
  },
  twoSumBrute: {
    js: `function twoSum(nums, target) {
  // try every pair — O(n²)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j];
    }
  }
  return []; // O(n²) time
}`,
    py: `def two_sum(nums, target):
    # try every pair — O(n²)
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
    cpp: `vector<int> twoSum(vector<int>& n, int t) {
    for(int i=0;i<n.size();i++)
        for(int j=i+1;j<n.size();j++)
            if(n[i]+n[j]==t) return{i,j};
    return {}; // O(n²)
}`,
    java: `int[] twoSum(int[] n, int t) {
    for(int i=0;i<n.length;i++)
        for(int j=i+1;j<n.length;j++)
            if(n[i]+n[j]==t)
                return new int[]{i,j};
    return new int[]{}; // O(n²)
}`,
  },
  twoSumTwoPtr: {
    js: `function twoSum(nums, target) {
  nums.sort((a, b) => a - b); // sort first
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return []; // O(n log n)
}`,
    py: `def two_sum(nums, target):
    nums.sort()
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target: return [left, right]
        elif s < target: left += 1
        else: right -= 1
    return []  # O(n log n)`,
    cpp: `vector<int> twoSum(vector<int> n, int t) {
    sort(n.begin(), n.end());
    int l=0, r=n.size()-1;
    while(l<r){
        int s=n[l]+n[r];
        if(s==t) return{l,r};
        else if(s<t) l++; else r--;
    }
    return {}; // O(n log n)
}`,
    java: `int[] twoSum(int[] n, int t) {
    Arrays.sort(n);
    int l=0, r=n.length-1;
    while(l<r){
        int s=n[l]+n[r];
        if(s==t) return new int[]{l,r};
        else if(s<t) l++; else r--;
    }
    return new int[]{}; // O(n log n)
}`,
  },
  twoSumHash: {
    js: `function twoSum(nums, target) {
  const map = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i); // store for later
  }
  return []; // O(n) time & space
}`,
    py: `def two_sum(nums, target):
    seen = {}  # value → index
    for i, num in enumerate(nums):
        need = target - num
        if need in seen: return [seen[need], i]
        seen[num] = i
    return []  # O(n) time & space`,
    cpp: `vector<int> twoSum(vector<int>& n, int t) {
    unordered_map<int,int> seen;
    for(int i=0;i<n.size();i++){
        int need=t-n[i];
        if(seen.count(need)) return{seen[need],i};
        seen[n[i]]=i;
    }
    return {}; // O(n)
}`,
    java: `int[] twoSum(int[] n, int t) {
    Map<Integer,Integer> m = new HashMap<>();
    for(int i=0;i<n.length;i++){
        int need=t-n[i];
        if(m.containsKey(need))
            return new int[]{m.get(need),i};
        m.put(n[i], i);
    }
    return new int[]{}; // O(n)
}`,
  },
  fibRec: {
    js: `function fib(n) {
  if (n <= 1) return n; // base case
  return fib(n-1) + fib(n-2); // 2 calls!
}
// Time:  O(2ⁿ) — exponential
// Space: O(n) call stack
// fib(40) ≈ 2 billion recursive calls`,
    py: `def fib(n):
    if n <= 1: return n  # base case
    return fib(n-1) + fib(n-2)
# Time:  O(2^n) — exponential!
# Space: O(n) call stack
# Recomputes same subproblems repeatedly`,
    cpp: `int fib(int n) {
    if (n <= 1) return n;  // base case
    return fib(n-1) + fib(n-2);
}
// Time:  O(2^n) — exponential!
// Space: O(n) stack
// fib(30) = ~1 billion calls`,
    java: `int fib(int n) {
    if (n <= 1) return n;  // base case
    return fib(n-1) + fib(n-2);
}
// Time:  O(2^n) — exponential!
// Space: O(n) stack
// Same work recomputed over and over`,
  },
  fibMemo: {
    js: `function fib(n, memo = {}) {
  if (n in memo) return memo[n]; // hit!
  if (n <= 1) return n;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n]; // cache & return
}
// Time:  O(n) — each computed once
// Space: O(n) memo table`,
    py: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)
# Time:  O(n) — each subproblem once
# Space: O(n) cache`,
    cpp: `int fib(int n, unordered_map<int,int>& m) {
    if(m.count(n)) return m[n]; // hit!
    if(n <= 1) return n;
    m[n] = fib(n-1,m) + fib(n-2,m);
    return m[n]; // O(n) time+space
}`,
    java: `Map<Integer,Integer> memo = new HashMap<>();
int fib(int n) {
    if(memo.containsKey(n)) return memo.get(n);
    if(n <= 1) return n;
    memo.put(n, fib(n-1) + fib(n-2));
    return memo.get(n); // O(n)
}`,
  },
  fibDP: {
    js: `function fib(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1; // only 2 vars!
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
// Time: O(n), Space: O(1) — optimal!`,
    py: `def fib(n):
    if n <= 1: return n
    prev, curr = 0, 1
    for i in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
# Time: O(n), Space: O(1) — optimal!`,
    cpp: `int fib(int n) {
    if(n <= 1) return n;
    int prev=0, curr=1;
    for(int i=2; i<=n; i++){
        int next = prev + curr;
        prev = curr; curr = next;
    }
    return curr; // O(n), O(1) space!
}`,
    java: `int fib(int n) {
    if(n <= 1) return n;
    int prev=0, curr=1;
    for(int i=2; i<=n; i++){
        int next = prev + curr;
        prev = curr; curr = next;
    }
    return curr; // O(n), O(1) space!
}`,
  },
};

// ─── algorithm config ─────────────────────────────────────────────────
const ALGOS = [
  {
    id: "sorting", label: "Sorting", vizType: "bars",
    approaches: [
      { id: "bubble", tier: "brute", name: "Bubble Sort", time: "O(n²)", space: "O(1)", why: "Always n² comparisons, even for sorted input", genSteps: stBubble, code: CODE.bubbleSort },
      { id: "insertion", tier: "better", name: "Insertion Sort", time: "O(n²) · Best O(n)", space: "O(1)", why: "Adaptive — O(n) for nearly-sorted data; in-place", genSteps: stInsertion, code: CODE.insertionSort },
      { id: "merge", tier: "opt", name: "Merge Sort", time: "O(n log n)", space: "O(n)", why: "Guaranteed O(n log n), stable sort, ideal for large data", genSteps: stMerge, code: CODE.mergeSort },
    ],
  },
  {
    id: "searching", label: "Searching", vizType: "array",
    approaches: [
      { id: "linear", tier: "brute", name: "Linear Search", time: "O(n)", space: "O(1)", why: "Scans every element — works on unsorted input", genSteps: stLinear, code: CODE.linearSearch },
      { id: "jump", tier: "better", name: "Jump Search", time: "O(√n)", space: "O(1)", why: "Block-jumps then linear scan — requires sorted input", genSteps: stJump, code: CODE.jumpSearch },
      { id: "binary", tier: "opt", name: "Binary Search", time: "O(log n)", space: "O(1)", why: "Eliminates half the search space each step", genSteps: stBinary, code: CODE.binarySearch },
    ],
  },
  {
    id: "twosum", label: "Two Sum", vizType: "array",
    approaches: [
      { id: "tsb", tier: "brute", name: "Brute Force", time: "O(n²)", space: "O(1)", why: "Try every pair — simple but lots of redundant work", genSteps: stTsBrute, code: CODE.twoSumBrute },
      { id: "tst", tier: "better", name: "Two Pointers", time: "O(n log n)", space: "O(1)", why: "Sort then converge — no extra memory needed", genSteps: stTsTwo, code: CODE.twoSumTwoPtr },
      { id: "tsh", tier: "opt", name: "HashMap", time: "O(n)", space: "O(n)", why: "One-pass complement lookup — optimal time", genSteps: stTsHash, code: CODE.twoSumHash },
    ],
  },
  {
    id: "fibonacci", label: "Fibonacci", vizType: "fib",
    approaches: [
      { id: "frec", tier: "brute", name: "Naive Recursion", time: "O(2ⁿ)", space: "O(n)", why: "Recomputes same subproblems exponentially", genSteps: stFibRec, code: CODE.fibRec },
      { id: "fmem", tier: "better", name: "Memoization", time: "O(n)", space: "O(n)", why: "Cache results — each subproblem computed exactly once", genSteps: stFibMemo, code: CODE.fibMemo },
      { id: "fdp", tier: "opt", name: "Space-Opt DP", time: "O(n)", space: "O(1)", why: "Only keep last 2 values — minimal memory usage", genSteps: stFibDP, code: CODE.fibDP },
    ],
  },
];

const LANGS = ["js", "py", "cpp", "java"];
const LANG_LABELS = { js: "JavaScript", py: "Python", cpp: "C++", java: "Java" };

// ─── bar visualizer ────────────────────────────────────────────────────
function BarViz({ step }) {
  if (!step?.a) return null;
  const { a, hi = [], sw = [], done = [] } = step;
  const max = Math.max(...a);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 150, padding: "0 6px", width: "100%" }}>
      {a.map((v, i) => {
        let bg = C.border;
        if (done.includes(i)) bg = C.opt;
        else if (sw.includes(i)) bg = C.brute;
        else if (hi.includes(i)) bg = C.better;
        const h = Math.max(8, Math.round((v / max) * 138));
        return (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ width: "100%", height: h, background: bg, borderRadius: "3px 3px 0 0", transition: "all 0.18s" }} />
            <span style={{ fontSize: 8, color: C.muted, fontFamily: "JetBrains Mono" }}>{v}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── array visualizer ─────────────────────────────────────────────────
function ArrayViz({ step, catId }) {
  if (!step) return null;
  const arr = step.arr || step.a;
  if (!arr) return null;
  const foundArr = Array.isArray(step.found) ? step.found : step.found >= 0 ? [step.found] : [];
  const notFound = step.found === -2;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: "100%", padding: "4px 6px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
        {arr.map((v, i) => {
          let bg = C.s2, border = C.border, textCol = C.text;
          if (foundArr.includes(i)) { bg = "#0e2a1c"; border = C.opt; textCol = C.opt; }
          else if (notFound && i === step.cur) { bg = "#2a0e12"; border = C.brute; textCol = C.brute; }
          else if (catId === "twosum") {
            if (i === step.p1) { bg = "#0e1a2a"; border = C.accent; textCol = C.accent; }
            if (step.p2 >= 0 && i === step.p2 && step.p2 !== step.p1) { bg = "#1a0e2a"; border = C.purple; textCol = C.purple; }
          } else {
            if (i === step.cur) { bg = "#2a1e0e"; border = C.better; textCol = C.better; }
            else if (step.l >= 0 && i >= step.l && i <= step.r) { bg = "#0e1220"; border = "#2a2a5a"; }
          }
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: bg, border: `1.5px solid ${border}`, borderRadius: 6, fontFamily: "JetBrains Mono", fontSize: 12, fontWeight: 500, color: textCol, transition: "all 0.15s" }}>{v}</div>
              <span style={{ fontSize: 8, color: C.muted, fontFamily: "JetBrains Mono" }}>{i}</span>
            </div>
          );
        })}
      </div>
      {catId === "twosum" && step.map && Object.keys(step.map).length > 0 && (
        <div style={{ padding: "4px 8px", background: C.s1, border: `1px solid ${C.border}`, borderRadius: 6, fontSize: 10, fontFamily: "JetBrains Mono", color: C.muted }}>
          map: {`{ ${Object.entries(step.map).slice(0, 7).map(([k, v]) => `${k}→${v}`).join(", ")}${Object.keys(step.map).length > 7 ? " …" : ""} }`}
        </div>
      )}
    </div>
  );
}

// ─── fibonacci visualizer ──────────────────────────────────────────────
function FibViz({ step }) {
  if (!step) return null;
  const { active, memo, table, calls, result } = step;
  if (table) {
    const show = Math.min(table.length, 12);
    return (
      <div style={{ padding: "4px 8px", width: "100%" }}>
        <div style={{ fontSize: 10, color: C.muted, fontFamily: "JetBrains Mono", marginBottom: 6 }}>DP table:</div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {table.slice(0, show).map((v, i) => {
            const isAct = i === active;
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <div style={{ width: 44, height: 38, display: "flex", alignItems: "center", justifyContent: "center", background: isAct ? "#0e1a2a" : C.s2, border: `1.5px solid ${isAct ? C.accent : C.border}`, borderRadius: 6, fontFamily: "JetBrains Mono", fontSize: v > 999 ? 9 : 12, fontWeight: 500, color: isAct ? C.accent : C.text, transition: "all 0.15s" }}>
                  {i <= 1 || v > 0 ? v : ""}
                </div>
                <span style={{ fontSize: 8, color: C.muted, fontFamily: "JetBrains Mono" }}>dp[{i}]</span>
              </div>
            );
          })}
        </div>
        {result != null && <div style={{ marginTop: 10, fontSize: 14, color: C.opt, fontFamily: "JetBrains Mono", fontWeight: 600 }}>Result: {result}</div>}
      </div>
    );
  }
  const memoKeys = Object.keys(memo || {}).sort((a, b) => +a - +b);
  return (
    <div style={{ padding: "4px 8px", width: "100%" }}>
      {calls > 0 && (
        <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: C.muted, fontFamily: "JetBrains Mono" }}>Total calls so far:</span>
          <span style={{ fontSize: 16, color: calls > 30 ? C.brute : C.better, fontFamily: "JetBrains Mono", fontWeight: 700 }}>{calls}</span>
        </div>
      )}
      {active >= 0 && (
        <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: C.muted, fontFamily: "JetBrains Mono" }}>Computing:</span>
          <span style={{ fontSize: 14, color: C.accent, fontFamily: "JetBrains Mono", fontWeight: 600 }}>fib({active})</span>
        </div>
      )}
      {memoKeys.length > 0 && (
        <div>
          <div style={{ fontSize: 10, color: C.muted, fontFamily: "JetBrains Mono", marginBottom: 4 }}>Cached results:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {memoKeys.slice(0, 14).map(k => (
              <div key={k} style={{ padding: "2px 7px", background: +k === active ? "#0e1a2a" : C.s2, border: `1px solid ${+k === active ? C.accent : C.border}`, borderRadius: 4, fontFamily: "JetBrains Mono", fontSize: 10, color: C.text }}>
                {k}:{memo[k]}
              </div>
            ))}
          </div>
        </div>
      )}
      {result != null && <div style={{ marginTop: 10, fontSize: 14, color: C.opt, fontFamily: "JetBrains Mono", fontWeight: 600 }}>Result: {result}</div>}
    </div>
  );
}

// ─── code panel ───────────────────────────────────────────────────────
function CodePanel({ codeStr, highlightLine, language, onLang }) {
  const lines = (codeStr || "").split("\n");
  const hlRef = useRef(null);
  useEffect(() => {
    hlRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [highlightLine]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
        {LANGS.map(l => (
          <button key={l} onClick={() => onLang(l)} style={{ padding: "5px 10px", background: language === l ? C.s1 : "transparent", color: language === l ? C.text : C.muted, border: "none", borderBottom: language === l ? `2px solid ${C.accent}` : "2px solid transparent", cursor: "pointer", fontSize: 10.5, fontFamily: "JetBrains Mono", transition: "all 0.12s" }}>
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
        {lines.map((line, i) => (
          <div key={i} ref={i === highlightLine ? hlRef : null} style={{ display: "flex", alignItems: "center", minHeight: 19, background: i === highlightLine ? "rgba(91,141,245,0.1)" : "transparent", borderLeft: i === highlightLine ? `2px solid ${C.accent}` : "2px solid transparent" }}>
            <span style={{ width: 30, textAlign: "right", paddingRight: 8, color: C.muted, fontSize: 10, fontFamily: "JetBrains Mono", flexShrink: 0, opacity: 0.5 }}>{i + 1}</span>
            <span style={{ fontSize: 11, fontFamily: "JetBrains Mono", color: i === highlightLine ? C.text : C.muted, whiteSpace: "pre", lineHeight: "19px" }}>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── legend dot ───────────────────────────────────────────────────────
function Dot({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
      <span style={{ fontSize: 9.5, color: C.muted }}>{label}</span>
    </div>
  );
}

// ─── main component ────────────────────────────────────────────────────
export default function AlgoVisualizer() {
  const [catIdx, setCatIdx] = useState(0);
  const [appIdx, setAppIdx] = useState(0);
  const [lang, setLang] = useState("js");
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(550);
  const [inputArr, setInputArr] = useState([34, 7, 23, 32, 5, 62, 18, 45, 11, 28, 50, 9]);
  const [target, setTarget] = useState(23);
  const [fibN, setFibN] = useState(8);
  const timerRef = useRef(null);

  const cat = ALGOS[catIdx];
  const approach = cat.approaches[appIdx];
  const tierColor = TIER[approach.tier].color;

  const steps = useMemo(() => {
    if (cat.id === "sorting") return approach.genSteps(inputArr);
    if (cat.id === "fibonacci") return approach.genSteps(Math.min(fibN, approach.id === "frec" ? 10 : 15));
    return approach.genSteps(inputArr, target);
  }, [cat.id, approach, inputArr, target, fibN]);

  const step = steps[Math.min(stepIdx, steps.length - 1)];

  useEffect(() => {
    clearInterval(timerRef.current);
    setStepIdx(0);
    setPlaying(false);
  }, [catIdx, appIdx, inputArr, target, fibN]);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setStepIdx(s => {
          if (s >= steps.length - 1) { setPlaying(false); return s; }
          return s + 1;
        });
      }, speed);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [playing, speed, steps.length]);

  const randomize = () => setInputArr(Array.from({ length: 12 }, () => Math.floor(Math.random() * 75) + 5));
  const reset = () => { setStepIdx(0); setPlaying(false); };

  const root = {
    display: "flex", height: "100vh", background: C.bg, color: C.text,
    fontFamily: "Syne, sans-serif", overflow: "hidden", fontSize: 13,
  };

  return (
    <div style={root}>
      {/* ── SIDEBAR ── */}
      <div style={{ width: 180, background: C.s1, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", overflowY: "auto", flexShrink: 0 }}>
        <div style={{ padding: "14px 12px 6px", fontSize: 15, fontWeight: 800, color: C.text, letterSpacing: -0.3 }}>
          AlgoViz
        </div>
        <div style={{ padding: "4px 10px 2px", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: C.muted, textTransform: "uppercase" }}>Categories</div>
        {ALGOS.map((a, i) => (
          <button key={a.id} onClick={() => { setCatIdx(i); setAppIdx(0); }} style={{ padding: "8px 12px", background: catIdx === i ? C.s2 : "transparent", color: catIdx === i ? C.text : C.muted, border: "none", textAlign: "left", cursor: "pointer", fontSize: 12.5, fontFamily: "Syne", borderLeft: catIdx === i ? `3px solid ${C.accent}` : "3px solid transparent", transition: "all 0.12s", width: "100%" }}>
            {a.label}
          </button>
        ))}
        <div style={{ height: 1, background: C.border, margin: "6px 0" }} />
        <div style={{ padding: "4px 10px 2px", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: C.muted, textTransform: "uppercase" }}>Approaches</div>
        {cat.approaches.map((a, i) => {
          const tc = TIER[a.tier].color;
          return (
            <button key={a.id} onClick={() => setAppIdx(i)} style={{ padding: "7px 12px", background: appIdx === i ? `${tc}12` : "transparent", color: appIdx === i ? tc : C.muted, border: "none", textAlign: "left", cursor: "pointer", fontSize: 11.5, fontFamily: "Syne", borderLeft: appIdx === i ? `3px solid ${tc}` : "3px solid transparent", transition: "all 0.12s", width: "100%", lineHeight: 1.35 }}>
              <div style={{ fontWeight: appIdx === i ? 700 : 400 }}>{a.name}</div>
              <div style={{ fontSize: 9.5, opacity: 0.7 }}>{TIER[a.tier].label} · {a.time}</div>
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        {/* Legend */}
        <div style={{ padding: "8px 12px", borderTop: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 9, color: C.muted, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>Visual Legend</div>
          {cat.vizType === "bars" ? (
            <>
              <Dot color={C.better} label="Comparing" />
              <Dot color={C.brute} label="Swapping" />
              <Dot color={C.opt} label="Sorted" />
            </>
          ) : cat.vizType === "array" ? (
            <>
              <Dot color={C.better} label="Current" />
              <Dot color={C.accent} label="Left ptr" />
              <Dot color={C.purple} label="Right ptr" />
              <Dot color={C.opt} label="Found" />
            </>
          ) : (
            <>
              <Dot color={C.accent} label="Active" />
              <Dot color={C.opt} label="Result" />
            </>
          )}
        </div>
      </div>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "7px 14px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: C.s1, flexShrink: 0 }}>
          <div style={{ padding: "2px 10px", background: `${tierColor}18`, border: `1px solid ${tierColor}55`, borderRadius: 10, color: tierColor, fontSize: 11, fontWeight: 700 }}>
            {TIER[approach.tier].label}: {approach.name}
          </div>
          <div style={{ flex: 1 }} />
          {cat.id !== "fibonacci" && (
            <>
              {(cat.id === "searching" || cat.id === "twosum") && (
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <label style={{ fontSize: 11, color: C.muted }}>target:</label>
                  <input type="number" value={target} onChange={e => setTarget(+e.target.value)} style={{ width: 50, padding: "2px 5px", background: C.s2, border: `1px solid ${C.border}`, color: C.text, borderRadius: 4, fontSize: 11, fontFamily: "JetBrains Mono", outline: "none" }} />
                </div>
              )}
              <button onClick={randomize} style={{ padding: "3px 9px", background: C.s2, border: `1px solid ${C.border}`, color: C.muted, borderRadius: 4, cursor: "pointer", fontSize: 11, fontFamily: "Syne" }}>
                Randomize
              </button>
            </>
          )}
          {cat.id === "fibonacci" && (
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <label style={{ fontSize: 11, color: C.muted }}>n =</label>
              <input type="number" value={fibN} min={1} max={approach.id === "frec" ? 10 : 15} onChange={e => setFibN(Math.min(approach.id === "frec" ? 10 : 15, Math.max(1, +e.target.value)))} style={{ width: 48, padding: "2px 5px", background: C.s2, border: `1px solid ${C.border}`, color: C.text, borderRadius: 4, fontSize: 11, fontFamily: "JetBrains Mono", outline: "none" }} />
              {approach.id === "frec" && <span style={{ fontSize: 10, color: C.muted }}>(max 10)</span>}
            </div>
          )}
        </div>

        {/* Tier tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, background: C.s1, flexShrink: 0 }}>
          {cat.approaches.map((a, i) => {
            const tc = TIER[a.tier].color;
            return (
              <button key={a.id} onClick={() => setAppIdx(i)} style={{ flex: 1, padding: "7px 6px", background: appIdx === i ? C.bg : "transparent", color: appIdx === i ? tc : C.muted, border: "none", borderBottom: appIdx === i ? `2.5px solid ${tc}` : "2.5px solid transparent", cursor: "pointer", fontSize: 11, fontFamily: "Syne", fontWeight: appIdx === i ? 700 : 400, transition: "all 0.12s" }}>
                {TIER[a.tier].label}
                <span style={{ fontSize: 9.5, marginLeft: 5, opacity: 0.75 }}>{a.time}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>
          {/* Left: Viz + Controls */}
          <div style={{ flex: 1.1, display: "flex", flexDirection: "column", borderRight: `1px solid ${C.border}`, minWidth: 0 }}>
            {/* Canvas */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: C.bg, padding: 10, overflow: "auto", minHeight: 0 }}>
              {cat.vizType === "bars" && <BarViz step={step} />}
              {cat.vizType === "array" && <ArrayViz step={step} catId={cat.id} />}
              {cat.vizType === "fib" && <FibViz step={step} />}
            </div>

            {/* Message */}
            <div style={{ padding: "5px 12px", background: C.s2, borderTop: `1px solid ${C.border}`, borderLeft: `3px solid ${tierColor}`, fontFamily: "JetBrains Mono", fontSize: 11, color: C.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flexShrink: 0 }}>
              {step?.msg}
            </div>

            {/* Progress */}
            <div style={{ height: 3, background: C.border, flexShrink: 0 }}>
              <div style={{ height: "100%", background: tierColor, width: `${((stepIdx + 1) / steps.length) * 100}%`, transition: "width 0.2s" }} />
            </div>

            {/* Controls */}
            <div style={{ padding: "6px 10px", display: "flex", alignItems: "center", gap: 5, background: C.s1, borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
              <Ctrl onClick={() => { reset(); }} title="⏮" />
              <Ctrl onClick={() => setStepIdx(s => Math.max(0, s - 1))} title="◀" />
              <button onClick={() => setPlaying(p => !p)} style={{ padding: "4px 16px", background: playing ? C.s2 : `${tierColor}22`, border: `1px solid ${playing ? C.border : tierColor}`, color: playing ? C.muted : tierColor, borderRadius: 5, cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "JetBrains Mono" }}>
                {playing ? "⏸" : "▶"}
              </button>
              <Ctrl onClick={() => setStepIdx(s => Math.min(steps.length - 1, s + 1))} title="▶" />
              <Ctrl onClick={() => { setStepIdx(steps.length - 1); setPlaying(false); }} title="⏭" />
              <span style={{ fontSize: 10, color: C.muted, fontFamily: "JetBrains Mono", marginLeft: 4 }}>{stepIdx + 1}/{steps.length}</span>
              <div style={{ flex: 1 }} />
              <span style={{ fontSize: 10, color: C.muted }}>Speed</span>
              <input type="range" min={80} max={1200} step={80} value={speed} onChange={e => setSpeed(+e.target.value)} style={{ width: 70, accentColor: tierColor }} />
            </div>

            {/* Complexity panel */}
            <div style={{ padding: "8px 10px", borderTop: `1px solid ${C.border}`, background: C.s1, flexShrink: 0 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", color: C.muted, textTransform: "uppercase", marginBottom: 5 }}>Complexity Comparison</div>
              <div style={{ display: "flex", gap: 5 }}>
                {cat.approaches.map((a, i) => {
                  const tc = TIER[a.tier].color;
                  return (
                    <div key={a.id} style={{ flex: 1, padding: "5px 7px", background: appIdx === i ? `${tc}10` : C.bg, border: `1px solid ${appIdx === i ? tc : C.border}`, borderRadius: 6, transition: "all 0.15s" }}>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 700, marginBottom: 2 }}>{a.name}</div>
                      <div style={{ fontSize: 11, color: C.text, fontFamily: "JetBrains Mono" }}>{a.time}</div>
                      <div style={{ fontSize: 9.5, color: C.muted, fontFamily: "JetBrains Mono" }}>Space {a.space}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 5, fontSize: 10.5, color: C.muted, lineHeight: 1.4 }}>💡 {approach.why}</div>
            </div>
          </div>

          {/* Right: Code */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
            <div style={{ padding: "6px 12px", borderBottom: `1px solid ${C.border}`, background: C.s1, fontSize: 10.5, color: C.muted, display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <span style={{ color: tierColor, fontFamily: "JetBrains Mono", fontWeight: 600 }}>{approach.name}</span>
              <span>·</span>
              <span style={{ fontFamily: "JetBrains Mono" }}>{approach.time}</span>
              <span>·</span>
              <span style={{ fontFamily: "JetBrains Mono" }}>Space {approach.space}</span>
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <CodePanel codeStr={approach.code[lang] || ""} highlightLine={step?.ln ?? -1} language={lang} onLang={setLang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ctrl({ onClick, title }) {
  return (
    <button onClick={onClick} style={{ padding: "4px 9px", background: C.s2, border: `1px solid ${C.border}`, color: C.muted, borderRadius: 5, cursor: "pointer", fontSize: 13, fontFamily: "JetBrains Mono" }}>
      {title}
    </button>
  );
}