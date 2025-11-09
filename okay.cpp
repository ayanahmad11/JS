#include <bits/stdc++.h>
#define int long long
using namespace std;

// overall Time complexity is O(n)

// function for Previous smaller element
vector<int> pse(vector<int> &a) {
    int n = a.size();
    stack<int> st;
    vector<int> okay(n);
    iota(okay.begin(), okay.end(), 0); // initialize with indices

    for (int i = 0; i < n; i++) { // O(n)
        while (!st.empty() && a[st.top()] >= a[i]) {
            st.pop();
        }
        if (!st.empty())
            okay[i] = st.top();
        st.push(i);
    }
    return okay;
}

// function for Next smaller element
vector<int> nse(vector<int> &a) {
    int n = a.size();
    stack<int> st;
    vector<int> okay(n);
    iota(okay.begin(), okay.end(), 0); // initialize with indices

    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && a[st.top()] >= a[i]) {
            st.pop();
        }
        if (!st.empty())
            okay[i] = st.top();
        st.push(i);
    }
    return okay;
}

void solve() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (auto &x : v) cin >> x;

    vector<int> t(n + 2);
    t[0] = t[n + 1] = -1e6;
    for (int i = 1; i <= n; i++) {
        t[i] = v[i - 1];
    }

    vector<int> PSE = pse(t);
    vector<int> NSE = nse(t);

    vector<int> k(n + 1);
    for (int i = 1; i <= n; i++) {
        int sz = NSE[i] - i + (i - PSE[i] - 1);
        k[sz] = max(t[i], k[sz]);
    }

    for (int i = n - 1; i >= 0; i--) {
        k[i] = max(k[i],k[i+1]);
    }

    for (int i = 1; i <= n; i++) {
        cout << k[i] << " ";
    }
    cout << endl;
}

signed main() {
    int tt;
    cin >> tt;
    while (tt--) {
        solve();
    }
    return 0;
}