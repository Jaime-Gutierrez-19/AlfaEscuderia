from flask import Blueprint, jsonify
from ..app import db
from .models import Member

api = Blueprint("api", __name__)

@api.route("/members", methods=["GET"])
def get_members():
    members = Member.query.all()
    return jsonify([m.serialize() for m in members])
