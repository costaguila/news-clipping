import React from 'react';
import { render } from '../../../setupTests';

import NewsList from '../NewsList';

describe('<NewsList />', () => {
  it('Deve possuir um titulo # g1', () => {
    //arrange
    const fonteNoticiasObj = {'id': 0,'title':'g1'}
    //act
    const component = render(<NewsList debug  key={fonteNoticiasObj.id} fonteNoticias={fonteNoticiasObj}/>);
    let header = component.find('.newssourceHeader h1')
    //assert
    expect(header[0]['children'][0].data).toEqual('# g1')
    expect(component).toMatchSnapshot();
  });
});
