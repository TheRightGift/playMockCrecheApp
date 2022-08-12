<!-- welcome.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Children</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/styles.css')}}" rel="stylesheet" type="text/css">
        <link rel="preconnect" href="https://fonts.bunny.net">
    </head>
    <body>
        <div id="children"></div>
        <script src="https://use.fontawesome.com/7b5b5acea1.js"></script>
        <script>
            function alt() {
                'use strict'

                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.querySelectorAll('.needs-validation')

                // Loop over them and prevent submission
                Array.prototype.slice.call(forms)
                    .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                            if (!form.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            form.classList.add('was-validated')
                        }, false)
                    })
            }
            alt();
        </script>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>