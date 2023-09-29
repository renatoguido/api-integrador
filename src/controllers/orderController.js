const { Request, Response } = require("express");
const Order = require("../models/order");

const orderController = {
    getAll: async (req, res) => {
        try {
            const getAllOrder = await Order.findAll();
            res.json(getAllOrder);
        } catch (error) {
            console(error);
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
            const { nome, cpf, contato, servico, horarioPreferencial, status } = req.body;
            console.log(req.body);

            const newOrder = await Order.create({
                nome,
                cpf,
                contato,
                servico,
                horarioPreferencial,
                status
            })

            res.status(201).json(newOrder)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateOrder: async (req, res) => {
        try {
            const [updateRows] = await Order.update(
                {
                    nome,
                    cpf,
                    contato,
                    servico,
                    horarioPreferencial,
                    status
                },
                {
                    where: id
                }
            )

        } catch (error) { 
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = orderController;