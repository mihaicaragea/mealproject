import React from 'react';
import styled from "styled-components";

const ButtonGroup = styled.div`
  margin-top: 20px;
`

function Wine(props) {


    const whiteWine = ['assyrtiko', 'pinot_blanc', 'cortese', 'roussanne', 'moschofilero', 'muscadet', 'viognier',
     'verdicchio', 'greco', 'marsanne', 'white_burgundy', 'chardonnay', 'gruener_veltliner', 'white_rioja',
     'frascati', 'gavi', 'l_acadie_blanc', 'trebbiano', 'sauvignon_blanc', 'catarratto', 'albarino', 'arneis',
     'verdejo', 'vermentino', 'soave', 'pinot_grigio', 'dry_riesling', 'torrontes', 'mueller_thurgau', 'grechetto',
     'gewurztraminer', 'chenin_blanc', 'white_bordeaux', 'semillon', 'riesling', 'sauternes', 'sylvaner', 'lillet_blanc']

    const redWine = ['petite_sirah', 'zweigelt', 'baco_noir', 'bonarda', 'cabernet_franc', 'bairrada', 'barbera_wine',
      'primitivo', 'pinot_noir', 'nebbiolo', 'dolcetto', 'tannat', 'negroamaro', 'red_burgundy', 'corvina',
      'rioja', 'cotes_du_rhone', 'grenache', 'malbec', 'zinfandel', 'sangiovese', 'carignan', 'carmenere', 'cesanese',
      'cabernet_sauvignon', 'aglianico', 'tempranillo', 'shiraz', 'mourvedre', 'merlot', 'nero_d_avola', 'bordeaux',
      'marsala', 'port', 'gamay', 'dornfelder', 'concord_wine', 'sparkling_red_wine', 'pinotage', 'agiorgitiko']

     const desertWine = ['pedro_ximenez', 'moscato', 'late_harvest', 'ice_wine', 'white_port', 'lambrusco_dolce',
        'madeira', 'banyuls', 'vin_santo', 'port', 'cava', 'cremant', 'champagne', 'prosecco', 'spumante', 'cream_sherry',
         'dry_sherry', 'dry_vermouth']




    return (
        <>
            <ButtonGroup className="pagination justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-primary">White</button>
                    <button type="button" className="btn btn-outline-primary">Red</button>
                    <button type="button" className="btn btn-outline-primary">Dessert</button>
                </div>
            </ButtonGroup>

        </>
    );
}

export default Wine;