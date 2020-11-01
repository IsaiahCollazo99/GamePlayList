release: python manage.py makemigrations --no-input
release: python manage.py migrate --no-input

web: gunicorn backendDjango.wsgi --log-file -