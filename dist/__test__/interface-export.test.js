"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
function isValidCountryObjectStructure(object) {
    return 'id' in object && 'name' in object && 'phonecode' in object && 'sortname' in object;
}
test('Check for Interface export when Type Structure is Same', function () {
    var country = {
        id: '1',
        name: 'country',
        phonecode: 'phone_number',
        sortname: 'co'
    };
    var isCountry = isValidCountryObjectStructure(country);
    expect(isCountry).toEqual(true);
});
test('Check for Interface export when Type Structure is Not Same', function () {
    var country = {
        id: '1',
        phonecode: 1234,
        sortname: 'co'
    };
    var isCountry = isValidCountryObjectStructure(country);
    expect(isCountry).toEqual(false);
});
function isValidCountryObjectAndValueType(object) {
    return typeof object.id == "string" && typeof object.name == "string" && typeof object.phonecode == "string" && typeof object.sortname == "string";
}
test('Check for Interface export when Type Structure is Same and Value is of same type as well', function () {
    var country = {
        id: '1',
        name: 'country',
        phonecode: '1234',
        sortname: 'co'
    };
    var isCountry = isValidCountryObjectAndValueType(country);
    expect(isCountry).toEqual(true);
});
test('Check for Interface export when Type Structure is Same and Value is of same type as well', function () {
    var country = {
        id: '1',
        name: 'country',
        phonecode: 1234,
        sortname: 'co'
    };
    var isCountry = isValidCountryObjectAndValueType(country);
    expect(isCountry).toEqual(false);
});
