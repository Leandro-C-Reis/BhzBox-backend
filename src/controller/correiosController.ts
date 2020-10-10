import parser from  'xml2json';
import api from '../services/correiosAPI';

async function correios (request: object)
{
    // const request = {
    //     'nCdServico': '04510',
    //     'sCepOrigem': '32073540',
    //     'sCepDestino': '04547000',
    //     'nVlPeso': '1', // em Kg
    //     'nCdFormato': 1,
    //     'nVlComprimento': 20, // em Cm
    //     'nVlAltura': 2,
    //     'nVlLargura': 20,
    //     'nVlDiametro': 0,
    //     'sCdMaoPropria': 'n',
    //     'nVlValorDeclarado': 0,
    //     'sCdAvisoRecebimento': 'n'
    // };
    
    let urlParameters = Object.entries(request).map(e => e.join('=')).join('&');
    const xml = await api.get(`nCdEmpresa&sDsSenha&${urlParameters}&StrRetorno=xml&nIndicaCalculo=3`);
    
    return parser.toJson(xml.data);
}

export default correios;