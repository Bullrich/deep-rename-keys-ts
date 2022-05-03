import renameDeep from '../index';

describe('deepRenameKeys test', () => {
    it('should rename nested keys.', function() {
        const foo = renameDeep({a: 'b', c: 'd', e: {c: 'f', g: {c: 'h'}}}, function(key) {
          if (key === 'c') {
            return 'zzz';
          }
          return key;
        });
        expect(foo).toEqual({a: 'b', zzz: 'd', e: {zzz: 'f', g: {zzz: 'h'}}});
      
        const bar = renameDeep({a: {a: {a: 'b'}}}, function(key) {
          if (key === 'a') {
            return 'zzz';
          }
          return key;
        });
        expect(bar).toEqual({zzz: {zzz: {zzz: 'b'}}});
      });
      
      it('should rename keys of objects nested in arrays.', function() {
        const foo = renameDeep([{a:'b',c:'d',e:[{c:'f',a:{c:'a'}},{c:'f',a:{c:'a'}},{c:'f',a:{c:'a'}}]},{a:'b',c:'d',e:[{c:'f',a:{c:'a'}},{c:'f',a:{c:'a'}},{c:'f',a:{c:'a'}}]}], function(key) {
          if (key === 'c') {
            return 'zzz';
          }
          return key;
        });
        const expectedEqual = [{a:'b',zzz:'d',e:[{zzz:'f',a:{zzz:'a'}},{zzz:'f',a:{zzz:'a'}},{zzz:'f',a:{zzz:'a'}}]},{a:'b',zzz:'d',e:[{zzz:'f',a:{zzz:'a'}},{zzz:'f',a:{zzz:'a'}},{zzz:'f',a:{zzz:'a'}}]}];
        expect(foo).toEqual(expectedEqual);
      
        const bar = renameDeep([{a:[{a:[{a: 'a'},{a: 'b'}]},{a:[{a: 'a'},{a: 'b'}]}]},{a:[{a:[{a: 'a'},{a: 'b'}]},{a:[{a: 'a'},{a: 'b'}]}]}], function(key) {
          if (key === 'a') {
            return 'zzz';
          }
          return key;
        });
        expect(bar).toEqual([{zzz:[{zzz:[{zzz: 'a'},{zzz: 'b'}]},{zzz:[{zzz: 'a'},{zzz: 'b'}]}]},{zzz:[{zzz:[{zzz: 'a'},{zzz: 'b'}]},{zzz:[{zzz: 'a'},{zzz: 'b'}]}]}]);
      });
});
