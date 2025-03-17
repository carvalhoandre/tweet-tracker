# Tweet Tracker 🐦

O **Tweet Tracker** é um aplicativo da web projetado para buscar, analisar e exibir tweets em tempo real usando a [**Coletor de Tweets**](https://github.com/carvalhoandre?tab=repositories). Inicialmente focada em rastrear tweets sobre `Neymar`, esta ferramenta fornece insights por meio de feeds de tweets ao vivo, análise de sentimentos e métricas por hora.

## 🚀 **Funcionalidades**
✅ **Exibição de tweets em tempo real** com engajamento (likes, retweets, respostas)  
✅ **Análises de sentimentos** (positivo, negativo, neutro)  
✅ **Dashboard interativo** para visualização de métricas  
✅ **Cálculo de hype score** para medir o engajamento no Twitter  
✅ **Design responsivo e moderno** com Tailwind CSS  

## 🛠️ **Tecnologias Utilizadas**
- **React 19 + Vite** ⚡ (desenvolvimento rápido e otimizado)
- **Tailwind CSS** 🎨 (estilização moderna e responsiva)
- **Axios** 🌐 (consumo de API)
- **Recharts** 📊 (gráficos interativos para visualização de dados)
- **React Router** 🚏 (navegação entre seções do app)

## 🎨 Estrutura do Projeto
```
📂 tweet-tracker/
├── 📂 src/
│   ├── 📂 components/      # Componentes reutilizáveis
│   │   ├── Header.jsx      # Cabeçalho
│   │   ├── Hero.jsx        # Seção inicial
│   │   ├── TweetsSection.jsx  # Lista de tweets coletados
│   │   ├── DashboardSection.jsx  # Seção com gráficos e métricas
│   │   ├── HypeChart.jsx   # Gráfico de Hype Score
│   ├── 📂 hooks/           # Hooks personalizados
│   │   ├── useFetch.js     # Hook para buscar dados da API
│   ├── 📂 services/        # Conexão com a API
│   │   ├── api.js          # Configuração do Axios
│   │   ├── tweets.js       # Funções para buscar tweets e métricas
│   ├── 📂 styles/          # Estilos com Tailwind
│   ├── App.jsx             # Componente principal da aplicação
│   ├── main.jsx            # Renderização do React
│   ├── index.css           # Estilos globais
├── .env                    # Configuração de variáveis de ambiente
├── package.json            # Dependências do projeto
├── README.md               # Documentação do projeto
```
