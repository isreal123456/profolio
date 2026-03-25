from django import forms

from .models import ContactMessage


class ContactMessageForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():
            css_class = "form-control"
            if name == "message":
                field.widget.attrs["rows"] = 6
            field.widget.attrs["class"] = css_class

    class Meta:
        model = ContactMessage
        fields = ["name", "email", "subject", "message"]
