import re
def removerLetras( cnpj_favorecido ):
    cnpj_favorecido = re.sub('[^0-9]', '', cnpj_favorecido)
    return cnpj_favorecido

