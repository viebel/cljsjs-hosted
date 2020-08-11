/**
 * @license Copyright 2010 Paul Novak (paul@wingu.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide('kemia.io.mdlTest');
goog.require('kemia.io.Testdata');
goog.require('goog.testing.jsunit');
goog.require('kemia.io.mdl');

function getMolfile() {
	
	var sdfs = kemia.io.Testdata.sdf.split("$$$$\n");
	return sdfs[3];
}

function testReadMolfile() {
	var mol = kemia.io.mdl.readMolfile( getMolfile() );
	assertEquals(45, mol.countAtoms());
	assertEquals(44, mol.countBonds());

	var bondToTest = mol.getBond(43);

	assertTrue(bondToTest instanceof kemia.model.Bond);
	assertEquals(1, bondToTest.order);
	assertEquals(mol.getAtom(19), bondToTest.source);
	assertEquals(mol.indexOfAtom(bondToTest.source), 19);
	assertEquals(mol.getAtom(27), bondToTest.target);
	assertEquals(mol.indexOfAtom(bondToTest.target), 27);
}

function testWriteMolfile() {
	var mol = kemia.io.mdl.readMolfile( getMolfile() );

	var molfile2 = kemia.io.mdl.writeMolfile(mol);

	var mol2 = kemia.io.mdl.readMolfile(molfile2);
	var molfile3 = kemia.io.mdl.writeMolfile(mol2);
	assertEquals(molfile2, molfile3);

}

function testMolRegNum() {
	var mol = kemia.io.mdl.readMolfile( getMolfile() );
	mol.id = '123456';
	var molfile2 = kemia.io.mdl.writeMolfile(mol);
	var mol2 = kemia.io.mdl.readMolfile(molfile2);
	assertEquals('123456', mol2.id);
}

function testReadRxnfile() {
	var reaction = kemia.io.mdl.readRxnfile(kemia.io.Testdata.rxnsample);
	assertEquals(2, reaction.getReactants().length);
	assertEquals(1, reaction.getProducts().length);
}

function testReadWriteReadRxnfile() {
	var reaction1 = kemia.io.mdl.readRxnfile(kemia.io.Testdata.rxnsample);
	var rxn_string = kemia.io.mdl.writeRxnfile(reaction1);
	var reaction2 = kemia.io.mdl.readRxnfile(rxn_string);
	assertEquals(reaction1.getReactants().length, reaction2.getReactants().length);
	assertEquals(reaction1.getProducts().length, reaction2.getProducts().length);
}
