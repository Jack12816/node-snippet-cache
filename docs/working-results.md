[root@workstation] $ node --nouse_idle_notification --expose_gc test-working.js

Manually called GC.
[Wed Jul 10 2013 22:07:13 GMT+0200 (CEST)] Initial Memory usage:
{ rss: 10436608, heapTotal: 6163968, heapUsed: 2022928 }
Cache size: 0
Cache memsize: 0

---

Readed file into buffer.
Manually called GC.
[Wed Jul 10 2013 22:07:13 GMT+0200 (CEST)] After File Loading Memory usage:
{ rss: 13873152, heapTotal: 6163968, heapUsed: 2311560 }
Cache size: 0
Cache memsize: 0

---

Cached the buffer 15 times for 10 seconds.
Manually called GC.
[Wed Jul 10 2013 22:07:13 GMT+0200 (CEST)] After Cache Loading Memory usage:
{ rss: 1093095424, heapTotal: 7195904, heapUsed: 2708584 }
Cache size: 1024
Cache memsize: 1024

---

Manually called GC.
[Wed Jul 10 2013 22:07:33 GMT+0200 (CEST)] After 20 Seconds Memory usage:
{ rss: 15646720, heapTotal: 8215808, heapUsed: 2623440 }
Cache size: 0
Cache memsize: 0

---

Manually called GC.
[Wed Jul 10 2013 22:08:13 GMT+0200 (CEST)] After 1 Minute Memory usage:
{ rss: 14430208, heapTotal: 6163968, heapUsed: 2153672 }
Cache size: 0
Cache memsize: 0

---

