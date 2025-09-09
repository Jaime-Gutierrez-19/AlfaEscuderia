from ..app import db

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(120), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "role": self.role
        }
