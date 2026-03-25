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

## Deploy To Render

This project is Render-ready via `render.yaml`.

1. Push this repo to GitHub.
2. In Render, create a new Blueprint and select this repo.
3. Set `DJANGO_SECRET_KEY` in Render environment variables.
4. (Optional) Set `DATABASE_URL` if using Render Postgres.

Environment variables supported:

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DJANGO_CSRF_TRUSTED_ORIGINS`
- `DATABASE_URL`
