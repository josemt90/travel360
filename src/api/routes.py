"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Site, Comment, Recommend
from api.utils import generate_sitemap, APIException
from sqlalchemy import func
from sqlalchemy import or_
from flask_jwt_extended import jwt_required, create_access_token, jwt_required, get_jwt_identity
import cloudinary
import cloudinary.uploader

api = Blueprint('api', __name__)

# Devuelve los sitios que contengan lo que se le pase por el formulario
@api.route('/sites', methods=['POST'])
def list_sites():

    site= request.json.get("site")
    sites = Site.query.filter(or_(Site.city.ilike(f"%{site}%"),Site.place_name.ilike(f"%{site}%")))
    
    response = [site.serialize() for site in sites]
    return jsonify(response)


@api.route('/detailSite', methods=['POST'])
def getSite():

    id_site = request.json.get("id_site")
    site = Site.query.get(id_site)
    
    
    return jsonify(site.serialize())





@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():      
    response_body = { "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"     }     
    return jsonify(response_body), 200



@api.route('/addSite', methods=['POST'])
@jwt_required()
def new_site():
    data = request.json
    place_name = data.get('name')
    url_site = data.get('video')
    city = data.get('city')
    description = data.get('description')
    location = data.get('location')
    url_image = data.get('image')
    user_id = get_jwt_identity()

    newSite = Site(place_name=place_name,url_site=url_site,url_image=url_image,city=city,description=description,location=location,user_id=user_id)
    db.session.add(newSite)
    db.session.commit()




#Devuelve los comentarios que pertenezcan al sitio
@api.route('/comments', methods=['POST'])
def list_comments():

    id_site= request.json.get("id_site")
    comments = Comment.query.filter_by(site_id = id_site )
    
    response = [comment.serialize() for comment in comments]
    return jsonify(response)


#Devuelve las recomendaciones que pertenezcan al sitio
@api.route('/recommends', methods=['POST'])
def get_recommends():

    id_site= request.json.get("id_site")
    recommends = Recommend.query.filter_by(site_id = id_site)
   
    response = [recommend.serialize() for recommend in recommends]
    return jsonify(response)

#agrega una recomendacion a la base de datos una vez se clique al boton recomendar  
@api.route('/addRecommends', methods=['POST'])
@jwt_required()
def add_recommends():

    id_site= request.json.get("id_site")
    recommend = Recommend(site_id= id_site, user_id=get_jwt_identity())
    db.session.add(recommend)
    db.session.commit()

#agrega un comentario a la base de datos una vez se clique al boton publicar  
@api.route('/addComment', methods=['POST'])
@jwt_required()
def add_comment():

    id_site = request.json.get("site_id")
    text = request.json.get("text")
    newComment = Comment(site_id = id_site, text=text, user_id=get_jwt_identity())
    db.session.add(newComment)
    db.session.commit()
 


#muestra todos los sitios
@api.route('/sites', methods=['GET'])
def all_sites():

    
    sites = Site.query.all()
    
    response = [site.serialize() for site in sites]
    return jsonify(response)


@api.route('/userSites', methods=['POST'])
@jwt_required()
def user_sites():

    user= get_jwt_identity()
    userSites = Site.query.filter_by(user_id = user)
    
    response = [site.serialize() for site in userSites]
    return jsonify(response)




#Login
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email, password=password).first()
    
    if not user:
        return jsonify({"message": "El usuario no fue encontrado"}), 401

    token = create_access_token(identity=user.id)
    data_response = user.serialize()
    data_response["token"] = token
   
    return jsonify(data_response), 200


@api.route('/role', methods=['GET'])
def list_role():
    roles = Role.query.all()
    response = [role.serialize() for role in roles]
    return jsonify(response), 200 

   #Listado de users

@api.route('/user', methods=['GET'])
def list_user():
    users = User.query.all()
    response = [user.serialize() for user in users]
    return jsonify(response), 200


 #Registro de users
@api.route('/user', methods=['POST'])
def add_user():
    data = request.form
    img = data.get('img')
    name = data.get('name')
    last_name =data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    result = cloudinary.uploader.upload(request.files['profile_image'], public_id=f'my_folder/hello')
    
    user = User(user_img=result['secure_url'], name=name, last_name=last_name, email=email, password=password, is_admin=False, role_id=2)

    if not name or not email or not password:
        return jsonify({"message": "Es necesario completar los campos (Nombre, email y password)", 'color': 'alert-danger', 'ok': False}), 401 

    
    db.session.add(user)
    db.session.commit()

    if not user:
        return jsonify({"message": "Error al crear el usuario", 'color': 'alert-danger', 'ok': False}), 401
        
    return jsonify({"message": "Usuario creado", 'color': 'alert-success', 'ok': True}), 200
    db.session.add(user)
    db.session.commit()
    token = create_access_token(identity=user.id)
    return jsonify({"token": token}), 200


@api.route('/validate', methods=['GET'])
@jwt_required()
def handle_validate():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user: 
        return jsonify({"validate" : True}), 200
    else:
        return jsonify({"validate" : False}), 400

 #cargar imagenes en cloudinary
 
@api.route('/upload', methods=['POST'])
def handle_upload():

    user1 = User.query.get(1)
    result = cloudinary.uploader.upload(request.files['profile_image'], public_id=f'my_folder/hello')
    print(result['secure_url'])

    user1.profile_image_url = result['secure_url']

    db.session.add(user1)
    db.session.commit()

    return jsonify("All good"), 200

