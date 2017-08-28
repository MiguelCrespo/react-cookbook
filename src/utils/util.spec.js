import recast from 'recast';
import babylon from '../babylon';
import shouldProcessThisFile from './shouldProcessFile';
import isReactClass from './isReactClass';
import {
  REACT_CLASS_DEFINITION_WITH_SEEDS,
  REACT_CLASS_DEFINITION_NO_PROCCESSED,
  REACT_CLASS_DEFINITION_WITHOUT_SEEDS,
} from './definitionsForTests';

const rReactClass = recast.parse(REACT_CLASS_DEFINITION_WITHOUT_SEEDS, { esprima: babylon });
const rReactClassSeeds = recast.parse(REACT_CLASS_DEFINITION_WITH_SEEDS, { esprima: babylon });

describe('Utils', () => {
  
  it('should ignore files without @tracker', () => {
    expect(shouldProcessThisFile(REACT_CLASS_DEFINITION_NO_PROCCESSED)).toBeFalsy();
  });

  it('should not ignore files without @tracker', () => {
    expect(shouldProcessThisFile(REACT_CLASS_DEFINITION_WITH_SEEDS)).toBeTruthy();
  });

  it('should understand that definition is a React class', () => {
    expect(isReactClass(rReactClass.program.body[0])).toBeTruthy();
  });

  it('should extract comment description');

  it('should extract propTypes information');

  it('should extract propTypes information');

  it('should extract propTypes information with seeds');

  it('should understand that definition is a React stateless function');
});