nomeHeroi = input("Digite o nome do herói: ")

xpHeroi = int(input("Digite a quantidade de experiência (XP) do herói: "))

if xpHeroi < 1000:
    nivelHeroi = "Ferro"
elif 1001 <= xpHeroi <= 2000:
    nivelHeroi = "Bronze"
elif 2001 <= xpHeroi <= 5000:
    nivelHeroi = "Prata"
elif 5001 <= xpHeroi <= 7000:
    nivelHeroi = "Ouro"
elif 7001 <= xpHeroi <= 8000:
    nivelHeroi = "Platina"
elif 8001 <= xpHeroi <= 9000:
    nivelHeroi = "Ascendente"
elif 9001 <= xpHeroi <= 10000:
    nivelHeroi = "Imortal"
else:
    nivelHeroi = "Radiante"

print(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")