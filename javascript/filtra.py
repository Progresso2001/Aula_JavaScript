list = ['a', 'vida', 'é', 'bela', 'para', 'se', 'viver']
# valor_filtrado = [x.capitalize() for x in list if len(x) > 2]
# print(valor_filtrado)

# valor_filtrado_para_maiuscula = [x.upper() for x in list if len(x) > 2]
# print(valor_filtrado_para_maiuscula)

# usando o set comprehension
# set_comp = {len(x) for x in list}
# print(set_comp)

# print(set(map(len, list)))

# usando dict comprehension
list_dict = {val: index for index, val in enumerate(list)}
print(list_dict)

