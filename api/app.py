import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['DATABASE'] = 'banco.db'
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

def conectar_bd():
    return sqlite3.connect(app.config['DATABASE'])

@app.route('/cadastrar-produto', methods=['GET'])
def cadastrar_produto():
    if request.method == 'GET':
        descricao = request.args.get('descricao')
        valor = request.args.get('valor')

        # Cria uma nova conexão para esta função
        db = conectar_bd()
        cursor = db.cursor()
        cursor.execute("INSERT INTO produtos (nome, preco) VALUES (?, ?)", (descricao, valor))
        db.commit()
        db.close()  # Fecha a conexão após usar

        return "Produto inserido!"
    else:
        return "Método não suportado. Use GET para cadastrar um produto."

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    if request.method == 'GET':
        # Cria uma nova conexão para esta função
        db = conectar_bd()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM produtos")
        produtos = cursor.fetchall()
        db.close()  # Fecha a conexão após usar

        return jsonify(produtos)
    else:
        return "Método não suportado. Use GET para listar produtos."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)