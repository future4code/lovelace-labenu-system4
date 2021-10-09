

## Projeto LabenuSystem

## Desenvolvedores

Israel Martins Cordeiro, Clarice Medeiros Passos e Lucas Lameirinhas

## Tecnologias utilizadas

TypeScript 

## Funcionalidades

-Endpoint de Criar uma Classe

-Endpoint de Criar um estudante 

-Endpoint de Criar um Professor 

-Endpoint de Criar uma Especialidade (relacionado a especialidade exercida pelo professor)

-Endpoint de Criar um Hobbie (relacionado ao hobbie do estudante)

-Endpoint de União do professor com a especialidade exercida por ele 

-Endpoint de União do estudante com o seu hobbie

-Endpoint de buscando a idade pelo ID do estudante

## Fluxo de criação

-Primeiro criamos o endpoint de criar uma turma, logo após criamos os endpoints de estudante e professor, que já são passados as suas respectivas turma pois as tabelas exigem o id da turma para isso, logo após criamos os endpoints de hobbie e especialidade em que geram seus ids unicos, em seguida criamos os endpoints de união do professor e sua especialidade (que exige os id do professor e da especialidade para a união) e do aluno com seu hobbie (que exige o id do aluno e do hobbie para a união) e por fim criamos o endpoint de buscar a idade pelo id do estudante.


## Status do Projeto 
- Funcionalidades Básicas OK
- Criar estudante - Ok
- Criar docente -OK
- Criar turma -OK
- Adicionar estudante na turma -OK
- Adicionar docente na turma -OK
- Pegar a idade de algum estudante a partir do id - OK

## Fotos Tabelas

# Tabela Classe 
![tabela Classe](https://user-images.githubusercontent.com/85313042/136660818-4b0ea293-1f88-4511-b1f8-775ba20bd641.png)


# Tabela Professor 
![tabela professor](https://user-images.githubusercontent.com/85313042/136660837-fd193b44-5f99-4c72-90fe-b596b7852762.png)


# Tabela Estudante 
![tabela estudante](https://user-images.githubusercontent.com/85313042/136660862-9e6d257e-4f19-4f8c-8de0-258c71ba76d9.png)


# Tabela Hobbie 
![tabela hobbie](https://user-images.githubusercontent.com/85313042/136660890-bc8de22c-b64c-4a41-83eb-c1164d124141.png)


# Tabela Especialidade 
![tabela especialidade](https://user-images.githubusercontent.com/85313042/136660906-2e479978-5a21-4bdc-96c4-9eb0ea3ae1ff.png)


# Tabela União Professor e especialidade 
![tabela professor e especialidade](https://user-images.githubusercontent.com/85313042/136660933-5151555b-eca2-4836-a378-6d46d52cb251.png)


# Tabela União Aluno e Hobbie 
![tabela estudante e hobbie](https://user-images.githubusercontent.com/85313042/136660955-b6a5bf48-f470-498f-94a1-7251b509e654.png)




## Fotos Postman 


# Criando uma Turma : endpoint : http://localhost:3003/class
![criando classe](https://user-images.githubusercontent.com/85313042/136660171-b8d23e45-8743-4af6-bda3-e5d427ce4b3c.png)



# Criando Professor : endpoint : http://localhost:3003/teacher
![criando professor](https://user-images.githubusercontent.com/85313042/136660280-a2d87dea-7cc3-4f96-8cea-65f6848cf952.png)


# Criando Aluno : endpoint: http://localhost:3003/students
![criando estudante](https://user-images.githubusercontent.com/85313042/136660325-f47f6b8b-e296-42f1-afc6-3d7d6a32a209.png)


# Criando Hobbie : endpoint : http://localhost:3003/hobbie
![criando hobbie](https://user-images.githubusercontent.com/85313042/136660361-d18c3fdb-fc37-41f7-a782-3dab91b437a7.png)


# Criando especialidade : endpoint : http://localhost:3003/specialty
![criando especialidade](https://user-images.githubusercontent.com/85313042/136660384-a048b2fd-1f2a-445b-8788-ad8eb1d835d4.png)


# União Professor com especialidade : endpoint : http://localhost:3003/teacher_specialty
![criando professor e especialidade](https://user-images.githubusercontent.com/85313042/136660437-f616d58d-8865-4a12-9979-311b41800d09.png)


# União Estudante com hobbie : endpoint : http://localhost:3003/student_hobbie
![criando hobbie e estudante](https://user-images.githubusercontent.com/85313042/136660481-2d427d50-690d-4fd4-8965-646b827c75c3.png)


# Buscando Idade pelo ID do Aluno : endpoint : http://localhost:3003/student/:id
![criando buscar estudante pelo id](https://user-images.githubusercontent.com/85313042/136660505-c596837e-3931-4af3-a284-e40d4283a86d.png)




## Link do deploy
