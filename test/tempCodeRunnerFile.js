var a = [1, 2, 2, 4, 10, 8, 6, 8, 9, 8, 6, 6]

var count = Object.create(null)

for (var q=0; q<a.length; ++q) {
  if (!count[a[q]]) {
    count[a[q]] = {i:q, n:1}
  } else {
    ++count[a[q]].n
  }
}

var order = Object.keys(count).sort(function (x, y) {
  return count[y].n - count[x].n || count[x].i - count[y].i
})

var res = []

for (var q=0; q<order.length; ++q) {
  for (var w=0; w<count[order[q]].n; ++w) {
    res.push(+order[q])
  }
}

console.log(res.join(' '));