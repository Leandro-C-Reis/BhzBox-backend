import dotenv from 'dotenv';
import api from '../services/galaxAPI';

dotenv.config({
    path: '.env'
});

const Auth = {
    galaxId: process.env.galaxId,
    galaxHash: process.env.galaxHash
};

const galax = 
{
    cliente: 
    {
        async CreateCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createCustomer', data);
        },
        
        async UpdateCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/updateCustomer', data);
        },

        async GetCustomerInfo(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCustomerInfo', data);
        },

        async VerifyPasswordCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/verifyPasswordCustomer', data);
        },
        
        async GetCustomers(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCustomers', data);
        }
    },

    cartões:
    {
        async CreateCard(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createCard', data);
        },

        async GetCardsBrandsByOperator(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCardsBrandsByOperator', data);
        },

        async GetCardsByCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCardsByCustomer', data);
        },

        async GetBrandCard(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getBrandCard', data);
        },

        async GetAllBrandEnabled(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getAllBrandEnabled', data);
        },
    },

    antifraude:
    {
        async GetFingerPrintJs(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getFingerPrintJs', data);
        },
    },

    operadoras:
    {
        async GetPaymentTypesEnabled(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getPaymentTypesEnabled', data);
        },

        async GetOperatorList(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getOperatorList', data);
        },
    },

    vendas:
    {
        async CreatePaymentBill(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createPaymentBill', data);
        },

        async CreatePaymentBillAndCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createPaymentBillAndCustomer', data);
        },

        async CreatePaymentBillBoleto(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createPaymentBillBoleto', data);
        },
        
        async CreatePaymentBillBoletoAndCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/createPaymentBillBoletoAndCustomer', data);
        },

        async GetPaymentBillInfo(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getPaymentBillInfo', data);
        },

        async GetPaymentBillsByCustomer(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getPaymentBillsByCustomer', data);
        },

        async GetPaymentWithCustomers(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getPaymentWithCustomers', data);
        },

        async CancelPaymentBill(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/cancelPaymentBill', data);
        },

        async UpdatePaymentBillCard(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/updatePaymentBillCard', data);
        },

        async GetCarneList(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCarneList', data);
        },

        async GetCarneCustom(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getCarneCustom', data);
        },

        async UpdateIndeterminatedContractValue(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/updateIndeterminatedContractValue', data);
        },

        async ChangeNfseEmission(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/changeNfseEmission', data);
        },
    },

    transacoes:
    {
        async AddTransactionContract(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/addTransactionContract', data);
        },
        
        async GetTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getTransaction', data);
        },

        async GetTransactionsByPaymentBill(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getTransactionsByPaymentBill', data);
        },

        async GetTransactions(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getTransactions', data);
        },

        async AddTransGetTransactionsByIdsactionContract(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getTransactionsByIds', data);
        },

        async UpdateTransactionCard(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/updateTransactionCard', data);
        },

        async UpdateTransactionInfo(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/updateTransactionInfo', data);
        },

        async ChargeBackTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/chargeBackTransaction', data);
        },

        async CancelTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/cancelTransaction', data);
        },

        async PayedExternalTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/payedExternalTransaction', data);
        },

        async RetryTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/retryTransaction', data);
        },

        async GetAllStatusTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getAllStatusTransaction', data);
        },

        async GetBoletoList(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/getBoletoList', data);
        },

        async CaptureTransaction(Request : any)
        {
            const data = { Auth, Request };
            return await api.post('/captureTransaction', data);
        },
    }
}

export default galax;