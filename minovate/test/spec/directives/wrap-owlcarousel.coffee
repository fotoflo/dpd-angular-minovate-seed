'use strict'

describe 'Directive: wrapOwlcarousel', ->

  # load the directive's module
  beforeEach module 'minovateApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<wrap-owlcarousel></wrap-owlcarousel>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the wrapOwlcarousel directive'
