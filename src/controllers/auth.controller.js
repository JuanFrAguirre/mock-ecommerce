const authController = {
  login: (req, res) => {
    res.render('pages/login')
  },
  register: (req, res) => {
    res.render('pages/register')
  },
  postLogin: (req, res) => {
    let { username, password } = req.body

    res.send(body)
  },
  postRegister: (req, res) => {
    let errors = []
    let {
      username,
      email,
      firstName,
      middleName,
      lastName,
      password,
      confirmPassword,
    } = req.body

    if (username.length < 6 || username.length > 20)
      errors.push('Username must be between 6 and 20 characters long')
    if (email === 'jf@jf') errors.push(`Email ${email} is already registered`)
    if (password !== confirmPassword) errors.push('Passwords do not match')

    errors.length !== 0
      ? res.send({
          message: 'Errors were found',
          errors,
          data: req.body,
        })
      : res.send(`
          <html>
            <body>
            <h1>User registered correctly!</h1>
            <script>
              setTimeout(function () {
                (window.location = 'http://localhost:3030/auth/login')
              }, 3000);
            </script>
            </body>
          </html>
        `)
  },
}

module.exports = authController
