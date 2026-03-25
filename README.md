# Dynamic Django Portfolio

Professional starter portfolio built with Django, including:

- Dynamic project content managed in admin
- Contact form saving messages to database
- Live update indicator via AJAX polling

## Quick Setup (VSCode)

```powershell
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Open:

- Home: `http://127.0.0.1:8000/`
- Admin: `http://127.0.0.1:8000/admin/`

## Project Apps

- `core`: homepage and live-status endpoint
- `projects`: project models and pages
- `contact`: contact form and message storage
