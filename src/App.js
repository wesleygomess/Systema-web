import React, { useState } from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import Checkbox from "@material-ui/core/Checkbox";
import BootstrapInput from "./styleSelected";

export default function App() {
  const productList = [
    {id: '111111111', promotion: {templatId: 'a1a1a1a1', title: 'PROD_01', id: '111111111'}},
    {id: '222222222', promotion: {templatId: 'a2a2a2a2', title: 'PROD_02', id: '222222222'}},
    {id: '333333333', promotion: {templatId: 'a3a3a3a3', title: 'PROD_03', id: '333333333 '}},
  ];
  const vouchers = ['', '', ''];

  const [productsSelecteds, setProductsSelecteds] = useState([]);
  const [copyProductsSelecteds, setCopyProductsSelecteds] = useState([]);

  const [checked, setChecked] = useState([true, true, true]);

  console.log('PRODUTO_SELECIONADO: ', productsSelecteds)

  function handleSelectedPrize(productIndex, inputIndex) {
    productsSelecteds[inputIndex] = productIndex === "" ? "" : productList[productIndex]

    setProductsSelecteds([...productsSelecteds])
    setCopyProductsSelecteds([...productsSelecteds])
  }

  function handleChecked(booleanValue, CheckedIndex) {
    checked[CheckedIndex] = booleanValue
    setChecked([...checked])

    if(!booleanValue){
      productsSelecteds[CheckedIndex] = ''
      setProductsSelecteds([...productsSelecteds])
    }else {
      setProductsSelecteds([...copyProductsSelecteds]);
    }
  }

  function enviar(){
    const productsNames = []
    const templatsIds = []
    const storeId = []

    const filteredProducts = productsSelecteds.filter(product => product !== '')

    if(filteredProducts.length !== 0){
      filteredProducts.forEach((product) => {
        templatsIds.push(product.promotion.templatId)
        productsNames.push(product.promotion.title)
        storeId.push(product.promotion.id)
      })

      console.log('NOME DO PRODUTO: ', productsNames)
      console.log('TEMPLATE_ID: ', templatsIds)
      console.log('ID: ', storeId)
    }
  }

  return (
    <div className="container-give-prize">

      <form
        className="form-give-prize"
      >
            {vouchers.map((_, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        width: "max-content",
                      }}
                    >
                      {`Bloco ${index + 1}:`}
                    </span>
                  </div>
                  <div key={index} className="area-selected-give-prize">
                    <NativeSelect
                    disabled={!checked[index]}
                      id="prize"
                      onChange={(e) =>
                        handleSelectedPrize(e.target.value, index)
                      }
                      input={<BootstrapInput />}
                      style={{ width: "100%" }}
                    >
                      <option value={""}>Selecione o prêmio</option>
                      {productList.length !== 0 &&
                        productList.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item.promotion.title}
                            </option>
                          );
                        })}
                    </NativeSelect>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        checked={checked[index]}
                        onChange={() => {
                          handleChecked(!checked[index], index);
                        }}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        style={{ color: "#42baef" }}
                      />
                      <span className="checkbox-text-prize">
                        Entregar agora
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <button type='button' onClick={enviar}>Solicitar</button>
      </form>
    </div>
  );
}
