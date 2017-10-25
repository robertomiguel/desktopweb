import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { Glyphicon } from 'react-bootstrap'
import MenuComp from './MenuComp'
import './estilo.css'

export default class VentanasTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (id) => {
    this.props.activarVentana(id)
  };

  render() {
    return (
      <div>
          <Tabs
            onChange={this.handleChange}
            value={this.props.activa}
            style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'}}
            className="barra-ventanas"
          >
            {this.props.ventanas.map((m,i)=>
              <Tab label={<span><Glyphicon glyph={m.icon}/></span>} value={i} key={`ventana-id-${i}`} />
            )}
          </Tabs>

          <SwipeableViews
            index={this.props.activa}
            onChangeIndex={this.handleChange}
            enableMouseEvents={false}
          >
            {this.props.ventanas.map((m,i)=>
                <MenuComp c={m.contenido} key={`ventana-comp-id-${i}`} />
            )}
          </SwipeableViews>

      </div>
    );
  }
}
