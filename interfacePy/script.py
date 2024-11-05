import tkinter as tk
from tkinter import messagebox

def iniciar_automacao():
    nome_patente = entrada_nome_patente.get()
    if nome_patente:
    
        messagebox.showinfo("Automação", f"Iniciando automação para a patente: {nome_patente}")

    else:
        messagebox.showwarning("Aviso", "Por favor, insira o nome da patente.")


janela = tk.Tk()
janela.title("Busca por Patentes")
janela.geometry("400x150")


label_nome_patente = tk.Label(janela, text="Nome da Patente:")
label_nome_patente.pack(pady=10)

entrada_nome_patente = tk.Entry(janela, width=30)
entrada_nome_patente.pack()


botao_iniciar = tk.Button(janela, text="Iniciar Automação", command=iniciar_automacao)
botao_iniciar.pack(pady=20)

janela.mainloop()
