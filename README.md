1. GET / => index OR halaman utama
2. GET /signup => halaman signup
3. POST /signup => handle signup -> reques GET /home
4. GET /login => halaman login
5. POST /login => handle login -> reques GET /home
6. GET /home => halaman utama setelah login
7. GET /course/:id(course) => halaman course online dan module
8. GET /course/:id/module => tombol start (description / sylabus)
9. GET /course/:id(course)/module/:id => halaman isi module (id+1 => next)
10. POST /course/:id(course)/module/:id/challenge => form challenge/quiz

list modul
  - module 1
  - module 2
  - quiz => 