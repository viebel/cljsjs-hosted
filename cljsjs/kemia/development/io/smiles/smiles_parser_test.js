goog.provide('kemia.io.smiles.SmilesParserTest');
goog.require('goog.testing.jsunit');
goog.require('kemia.io.smiles.SmilesParser');

var rxn;
var mol;
function setUp() {
}

function testAtomCount() {
	var mol = kemia.io.smiles.SmilesParser.parse('CCC');
	assertEquals(mol.countAtoms(), 3);
	mol = kemia.io.smiles.SmilesParser
			.parse('C(=O)(c1c([NH2+])cccc1)c1c(C)cccc1');
	assertEquals(mol.countAtoms(), 16);
	var a = mol.getAtom(4);
	assertEquals( 'N', a.getSymbol());
	assertEquals( 1, a.getCharge());
	assertEquals( 3, a.hydrogenCount());
}

function testTimeParse() {
	var smiles = 'CCCC(C(=O)O)CCC';
	for ( var i in smiles) {
		kemia.io.smiles.SmilesParser.parse(smiles);
	}
}

function test01() {
	var mol = kemia.io.smiles.SmilesParser.parse('CBrClON');
}

function test02() {
	var mol = kemia.io.smiles.SmilesParser.parse("CCCC(C(=O)O)CCC");
}
function test03() {
	var mol = kemia.io.smiles.SmilesParser.parse("C1CCNC1");
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals(1, rings.length);

}
function test04() {
	var mol = kemia.io.smiles.SmilesParser.parse("F[Au](F)F");
	var gold = mol.getAtom(1);
	assertEquals(mol.countBonds(), 3);
	assertEquals( "Au", gold.getSymbol());
}

function test05() {
	var mol = kemia.io.smiles.SmilesParser
			.parse("[H][C@@]1(CC[C@@]2([H])C3=CC=C4C[C@H](CC[C@]4(C)[C@@]3([H])CC[C@]12C)O[C@@H]1O[C@H](CO)[C@@H](O)[C@H](O)[C@H]1O)[C@H](C)\C=C\[C@H](C)C(C)C");
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals(5, rings.length);
}

function test06() {
	var mol = kemia.io.smiles.SmilesParser
			.parse("O5CCN(CC=3C=1C=CC=CC=1C(=C2C=CC=CC2=3)CN4CCOCC4)CC5");
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals(5, rings.length);

}