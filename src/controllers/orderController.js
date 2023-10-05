const { Request, Response } = require("express");
const Order = require("../models/orders");

const orderController = {
    getAll: async (req, res) => {
        try {
            const getAllOrder = await Order.findAll();
            res.status(200).json(getAllOrder);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Pedido não encontrado" });
        }
    },

    getById: async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            const order = await Order.findByPk(id);

            if (order) {
                res.json(order)
            } else {
                res.status(400).json({ error: "Pedido nao encontrado" })
            }
        } catch {
            console.log(error);
            res.status(500).json({ error: "Erro em buscar detalhes do pedido" })
        }
    },

    createOrder: async (req, res) => {
        try {
            const { nome_completo, cpf, telcontato, email, cep, numerocasa,logradouro, bairro, localidade, uf, plan, time, status } = req.body;
            console.log(req.body);

            const newOrder = await Order.create(
                {
                    nome_completo: nome_completo,
                    cpf: cpf,
                    telcontato: telcontato,
                    email: email,
                    cep: cep,
                    numerocasa: numerocasa,
                    logradouro: logradouro,
                    bairro: bairro,
                    localidade: localidade,
                    uf: uf,
                    plan: plan,
                    time: time,
                })

            res.status(201).json(newOrder)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateOrder: async (req, res) => {
        try {
            const id = req.params.id; // Pegue o 'id' da URL
            const {
                nome_completo,
                cpf,
                telcontato,
                email,
                cep,
                numerocasa,
                logradouro,
                bairro,
                localidade,
                uf,
                plan,
                time,
                status
            } = req.body;
    
            const [updateRows] = await Order.update(
                {
                    nome_completo,
                    cpf,
                    telcontato,
                    email,
                    cep,
                    numerocasa,
                    logradouro,
                    bairro,
                    localidade,
                    uf,
                    plan,
                    time,
                    status
                },
                {
                    where: { id: id } // Especifique o ID do pedido a ser atualizado
                }
            );
    
            if (updateRows === 1) {
                res.status(200).json({ message: "Pedido atualizado com sucesso" });
            } else {
                res.status(400).json({ error: "Pedido não encontrado" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = orderController;