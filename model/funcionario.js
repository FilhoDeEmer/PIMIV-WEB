const sequelize = require('./database.js').sequelize
const { DataTypes } = require('sequelize');
/* const Empresa = require('./empresa.js').Empresa */
const Funcionario = sequelize.define('Funcionario', {
    codigo_funcionario: { type: DataTypes.INTEGER, primaryKey: true },
    codigo_empresa: {
        type: DataTypes.INTEGER
    },
    codigo_cargo: {
        type: DataTypes.INTEGER
    },
    codigo_usuario: {
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },


    rua: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    numero: {
        type: DataTypes.INTEGER,
    },
    cidade: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },

    salario: {
        type: DataTypes.DECIMAL,
    },
    data_adimicao: {
        type: DataTypes.STRING,
    },
    vale_transporte: {
        type: DataTypes.DECIMAL,
    },
    vale_alimentacao: {
        type: DataTypes.DECIMAL,
    },
    vale_refeicao: {
        type: DataTypes.DECIMAL,
    },
    PLANO_DE_SAUDE: {
        type: DataTypes.DECIMAL,
    },

    cod_banco: {
        type: DataTypes.INTEGER,
    },
    nome_banco: {
        type: DataTypes.STRING,
    },
    agencia: {
        type: DataTypes.INTEGER,
    },
    n_conta: {
        type: DataTypes.INTEGER,
    },

}, { timestamps: false });



module.exports = { Funcionario };