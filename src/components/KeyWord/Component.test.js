import FlexView from './Component';

describe('<FlexView tagName="section" />', () => {
  const wrapper = shallow(<FlexView tagName="section" />)
  it('should output a section element', () => {
    expect(wrapper.html()).toContain('section');
  });
});

describe('<FlexView row />', () => {
  const wrapper1 = shallow(<FlexView row />)
  it('should output an element with the given flex styles property flexDirection row', () => {
    expect(wrapper1.html()).toContain('flex-direction:row;');
  });
});

describe('<FlexView />', () => {
  const wrapper1 = shallow(<FlexView />)
  it('should output an element with the default flex styles property flexDirection column', () => {
    expect(wrapper1.html()).toContain('flex-direction:column;');
  });
});

