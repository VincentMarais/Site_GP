from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/get-excel-data')
def get_excel_data():
    # Charger le fichier Excel
    df = pd.read_excel("chemin_vers_votre_fichier.xlsx")

    # Convertir le DataFrame en un dictionnaire
    data = df.to_dict(orient="records")

    return jsonify(data)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
