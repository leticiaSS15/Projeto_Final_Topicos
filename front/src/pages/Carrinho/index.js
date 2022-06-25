import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

export default function Carrinho() {
    const products_list = localStorage.getItem('products_list'); // Lista de IDS
    const userId = localStorage.getItem('userId');
    let [products, setProducts] = useState([]);
    let conter = 0;

    useEffect(() => {
        api.get('products', {
        }).then(response => {
            setProducts(response.data);
        })
    }, []);
  
    products = products.filter(person => products_list.includes(person.id));

    function count(id){
            conter = 0;
            for (let j=0; j < products.length; j++){
              if (id === products[j].id){
                conter++;
              }
            }
            return conter;
    }

    return (
        <div className="carrinho-container">
            <header>
                <span>Meu Carrinho!!</span>
                <Link to="/profile" className="button"> Finalizar Pedido </Link>
            </header>
            <h1>Meus Produtos</h1>
            <ul>
            {products.map(product => (
                    <li key={product.id}>
                        <strong>Produto:</strong>
                             <p>{product.name}</p>
                
                        <strong>Quantidade:</strong>
                            <p>{count(product.id)}</p>
                
                        <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.value)}</p>
                    </li>
                ))}
            </ul>
            <br></br>
            <ul>
                <li className="total">
                    <strong className="total">Valor Total:</strong>
                    <p className="total">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(1050.00)}</p>
                </li>
            </ul>
        </div>
    );
}



    // function selectionProducts(item, index) {
    //     for (let i = 0; i <= products.lenght; i++) {
    //         if (index !== products_list[i]) {
    //             <li key={item}>
    //             <strong>Produto:</strong>
    //                  <p>{item.name}</p>
        
    //             <strong>Quantidade:</strong>
    //                 <p>{item.length}</p>
        
    //             <strong>Valor:</strong>
    //                 <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.value)}</p>
    //         </li>
    //         }
    //     }
    // }


// function calculate(product_item) {
//     products_list.forEach(element => {
//         if (element === product_item.id) {
//             product_item => {
//                 <li key={product_item.id}>
//                 <strong>Produto:</strong>
//                     <p>{product_item.name}</p>

//                 <strong>Quantidade:</strong>
//                     <p>{product_item.length}</p>

//                 <strong>Valor:</strong>
//                      <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product_item.value)}</p>
//                  </li>
//             }
//         }
//     });
// }