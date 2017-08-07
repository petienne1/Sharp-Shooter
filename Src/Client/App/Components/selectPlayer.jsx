import React from 'react';
import SweetScroll from 'sweet-scroll';
import VirtualizedSelect from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import topPlayers from '../Data/topPlayers';


class Selectplayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = topPlayers.map(g => ({ value: g, label: g }));
    const filterOptions = createFilterOptions({ options });
    return (
      <VirtualizedSelect
        className="SearchBar--Dropdown"
        onChange={(selectValue) => {
          this.props.handleSetPlayer(selectValue);
          this.props.handleClearPlayer();
          const sweetScroll = new SweetScroll();
          const height = this.props.windowHeight - 62;
          sweetScroll.to(height, 0);
        }}
        options={options}
        filterOptions={filterOptions}
        value={this.props.currentPlayer}
        simpleValue={true}
        disable={false}
      />
    );
  }
}

export default Selectplayer;
