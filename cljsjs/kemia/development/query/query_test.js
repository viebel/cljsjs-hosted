/**
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License. Copyright (c) 2010 Mark Rijnbeek (markr@ebi.ac.uk)
 */
goog.provide("kemia.query.QueryTest")
goog.require('goog.testing.jsunit');
goog.require('goog.debug.Console');
goog.require('goog.debug.Logger');
goog.require('kemia.io.mdl');
goog.require('kemia.io.smiles.SmilesParser');
goog.require('kemia.query.MoleculeCompiler');
goog.require('kemia.query.DFSMapper');
goog.require('kemia.query.SmilesCompiler');



function createMolecule() {
	var molfile = '\n OpenBabel05291001332D\n\n  9  9  0  0  0  0  0  0  0  0999 V2000\n   -6.3750   -0.6250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -6.3750    0.3750    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.5092    0.8755    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6427    0.3764    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6411   -0.6236    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.5061   -1.1255    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.5092    1.8755    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -6.3766    2.3732    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6435    2.3759    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0  0  0  0\n  2  3  1  0  0  0  0\n  3  4  1  0  0  0  0\n  3  7  1  0  0  0  0\n  4  5  2  0  0  0  0\n  5  6  1  0  0  0  0\n  6  1  1  0  0  0  0\n  7  8  1  0  0  0  0\n  7  9  2  0  0  0  0\nM  END\n';
	return kemia.io.mdl.readMolfile(molfile);
}

function createBenzene() {
	var benzene = "\n  xxx     10310613082D          \n\n  6  6  0  0  0  0            999 V2000\n    0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  2  1  2  0  0  0  0\n  3  1  1  0  0  0  0\n  4  3  2  0  0  0  0\n  5  2  1  0  0  0  0\n  6  4  1  0  0  0  0\n  5  6  2  0  0  0  0\nM  END\n";
	return kemia.io.mdl.readMolfile(benzene);
}

function printMaps(maps) {
	var c = new goog.debug.Console();
	c.setCapturing(true);
	var logger = goog.debug.Logger.getLogger('RingPlacerTest');
	logger.info('printMaps');
	for ( var i = 0; i < maps.length; i++) {
		var keys = maps[i].getKeys();
		var vals = maps[i].getValues();
		logger.info("map: query index -> queried index");
		for ( var j = 0; j < keys.length; j++) {
			logger.info(keys[j] + " -> " + vals[j]);
		}
	}
}

function testSmilesCompiler1() {
	var queried = createMolecule();
	var query = new kemia.query.SmilesCompiler().compile('CCC');
	var mapper = new kemia.query.DFSMapper(query);
	var maps = mapper.mapUnique(queried);
	assertEquals(6, maps.length);
}

function testSmilesCompiler2() {
	var c = new goog.debug.Console();
	c.setCapturing(true);
	var logger = goog.debug.Logger.getLogger('RingPlacerTest');
	logger.info('testSmilesCompiler2');
	var queried = createMolecule();
	var query = new kemia.query.SmilesCompiler().compile('CCCN');
	var mapper = new kemia.query.DFSMapper(query);
	var maps = mapper.mapUnique(queried);
	printMaps(maps);
	assertEquals(1, maps.length);
}

function testSmilesCompiler3() {
	var queried = createMolecule();
	var query = new kemia.query.SmilesCompiler().compile('CCC=N');
	var mapper = new kemia.query.DFSMapper(query);
	var maps = mapper.mapUnique(queried);
	// printMaps(maps);
	assertEquals(2, maps.length);
}

function genericSmilesMatchTest(smiles) {
	var queried = kemia.io.smiles.SmilesParser.parse(smiles);
	var query = new kemia.query.SmilesCompiler().compile(smiles);
	var mapper = new kemia.query.DFSMapper(query);
	var maps = mapper.mapUnique(queried);
	return maps.length == 1;
}

function testGenericSmiles1() {
	assert(genericSmilesMatchTest('CC'));
}
function testGenericSmiles2() {
	assert(genericSmilesMatchTest('C(C)C'));
}
function testGenericSmiles3() {
	assert(genericSmilesMatchTest('CC(C)C'));
}
function testGenericSmiles4() {
	assert(genericSmilesMatchTest('CC(CO)C'));
}
function testGenericSmiles5() {
	assert(genericSmilesMatchTest('C1C(CO)C1'));
}
function testGenericSmiles6() {
	assert(genericSmilesMatchTest('CC(C)C(CO)C(CCC(C)C)C'));
}
function testGenericSmiles7() {
	assert(genericSmilesMatchTest("c1cc(ccc1C(C(CO)NC(=O)C(Cl)Cl)O)N(=O)=O"));
}
function testGenericSmiles8() {
	assert(genericSmilesMatchTest("c1c2c(cc(c1Cl)S(=O)(=O)N)S(=O)(=O)N=CN2"));
}
function testGenericSmiles9() {
	assert(genericSmilesMatchTest("CN(C)CCCN1c2ccccc2Sc3c1cc(cc3)Cl"));
}
function testGenericSmiles10() {
	assert(genericSmilesMatchTest("Cc1c(nc[nH]1)CSCCNC(=NC#N)NC"));
}
function testGenericSmiles11() {
	assert(genericSmilesMatchTest("CN1c2ccc(cc2C(=NCC1=O)c3ccccc3)Cl"));
}
function testGenericSmiles12() {
	assert(genericSmilesMatchTest("CC(=O)OC1C(Sc2ccccc2N(C1=O)CCN(C)C)c3ccc(cc3)OC"));
}

function testGenericSmiles13() {
	assert(genericSmilesMatchTest("CN(C)CCOC(c1ccccc1)c2ccccc2"));
}
function testGenericSmiles14() {
	assert(genericSmilesMatchTest("c1ccc(c(c1)C(=O)O)Nc2cccc(c2)C(F)(F)F"));
}

function testGenericSmiles15() {
	assert(genericSmilesMatchTest("c1cc(ccc1C(=O)CCCN2CCC(CC2)(c3ccc(cc3)Cl)O)F"));
}
function testGenericSmiles16() {
	assert(genericSmilesMatchTest("CN(C)CCCN1c2ccccc2CCc3c1cccc3"));
}
function testGenericSmiles17() {
	assert(genericSmilesMatchTest("CCN(CC)CC(=O)Nc1c(cccc1C)C"));
}
function testGenericSmiles18() {
	assert(genericSmilesMatchTest("CCC1(C(=O)NC(=O)NC1=O)c2ccccc2"));
}
function testGenericSmiles19() {
	assert(genericSmilesMatchTest("c1ccc(cc1)C2(C(=O)NC(=O)N2)c3ccccc3"));
}
function testGenericSmiles20() {
	assert(genericSmilesMatchTest("CCN(CC)CCNC(=O)c1ccc(cc1)N"));
}
function testGenericSmiles21() {
	assert(genericSmilesMatchTest("CC(C)NCC(COc1cccc2c1cccc2)O"));
}
function testGenericSmiles22() {
	assert(genericSmilesMatchTest("CCCCNc1ccc(cc1)C(=O)OCCN(C)C"));
}
function testGenericSmiles23() {
	assert(genericSmilesMatchTest("COc1cc(cc(c1OC)OC)Cc2cnc(nc2N)N"));
}
function testGenericSmiles24() {
	assert(genericSmilesMatchTest("CC(C)C(CCCN(C)CCc1ccc(c(c1)OC)OC)(C#N)c2ccc(c(c2)OC)OC"));
}
function testGenericSmiles25() {
	assert(genericSmilesMatchTest("C([C@@H](CO)O)CC"));
}
function testGenericSmiles26() {
	assert(genericSmilesMatchTest("O([C@@](CC)(C#N)C)C(C)=O"));
}
function testGenericSmiles27() {
	assert(genericSmilesMatchTest("O([C@]([C@@](OC(C)=O)(C#N)C)(C#N)C)C(C)=O"));
}
function testGenericSmiles28() {
	assert(genericSmilesMatchTest("C(SC)(=[NH2])N.S(=O)(=O)(O)O"));
}
function testGenericSmiles29() {
	assert(genericSmilesMatchTest("C([C@H]([C@@H](C(OC)=O)O)O)(OC)=O"));
}
function testGenericSmiles30() {
	assert(genericSmilesMatchTest("O([C@@H](C(C)C)C)C(C)=O"));
}
function testGenericSmiles31() {
	assert(genericSmilesMatchTest("C(CCC#N)(=O)c1ccccc1"));
}
function testGenericSmiles32() {
	assert(genericSmilesMatchTest("O=C1c2c3c(ccc2C(O1)=O)cccc3"));
}
function testGenericSmiles33() {
	assert(genericSmilesMatchTest("[N+](C)(C)(C)[C@H]1CS(=O)(=O)C=C1"));
}
function testGenericSmiles34() {
	assert(genericSmilesMatchTest("C(C#C)(C)(C)O"));
}
function testGenericSmiles35() {
	assert(genericSmilesMatchTest("C[C@@H]1C(=O)CCCC1"));
}
function testGenericSmiles36() {
	assert(genericSmilesMatchTest("C(CCCCCCCC=C)COC(C)=O"));
}
function testGenericSmiles37() {
	assert(genericSmilesMatchTest("N(C(CCC(=O)O)=O)(CC)CC"));
}
function testGenericSmiles38() {
	assert(genericSmilesMatchTest("C(OC(C)=O)[C@@H]1[C@@H](COC(C)=O)[C@@H](C)C=C[C@@H]1C"));
}
function testGenericSmiles39() {
	assert(genericSmilesMatchTest("N(/Cl)=C1/C=C(Br)C(=O)C(=C1)Br"));
}
function testGenericSmiles40() {
	assert(genericSmilesMatchTest("C(C)[n+]1c2c(cc(C)cc2)ccc1C"));
}

function testDFSMapper() {
	var queried = createBenzene();
	var query = new kemia.query.MoleculeCompiler().compile(queried);

	var mapper = new kemia.query.DFSMapper(query);

	var unique = mapper.mapUnique(queried);
	assertEquals(1, unique.length);
	assertEquals(6, unique[0].getCount());

	var first = mapper.mapFirst(queried);
	assertEquals(6, first.getCount());

}