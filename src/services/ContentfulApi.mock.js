export const queryOptions = {
  slug: 'chain-reaction',
  locale: 'en-US',
  include: 4,
  id: '1234'
}

export const credentials = {
  CONTENTFUL_SPACE_ID: '123412341234',
  CONTENTFUL_ACCESS_TOKEN: '12987234djkhfsd',
  CONTENTFUL_PREVIEW_ACCESS_TOKEN: 'sa8ewyrw333999999',
  CONTENTFUL_ENVIRONMENT: 'master',
  contentfulApiHost: 'cdn.host.com',
  contentfulPreviewApiHost: 'preview.host.com',
  locale: 'en'
}

const lookPage = {
  items: [
    {
      fields: {
        title: 'Chain reaction',
        slug: 'chain-reaction',
        modules: [
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '75RjOqcw51tCphjrPpypeV',
              type: 'Entry',
              createdAt: '2020-04-07T14:45:04.938Z',
              updatedAt: '2020-05-18T17:24:54.298Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 6,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'heroBanner'
                }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'The Forgotten Art of Bracelet Stacking',
              publishDate: '2020-04-04',
              images: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'e48r2iwyjczp'
                    }
                  },
                  id: '4btbj7ZE7Rd6cEuAImiuFp',
                  type: 'Entry',
                  createdAt: '2020-05-16T00:11:03.391Z',
                  updatedAt: '2020-05-17T18:19:02.318Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment'
                    }
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'responsiveImage'
                    }
                  },
                  locale: 'en-US'
                },
                fields: {
                  imageAltText: 'Chain Reaction',
                  mobilePicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583242311/editorial-lookbook/chain-reaction/edit-left.jpg',
                  tabletPicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583242844/editorial-lookbook/chain-reaction/look-2-shop-desktop-v2.jpg',
                  desktopPicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583257502/editorial-lookbook/chain-reaction/hero-desktop.jpg'
                }
              },
              lookType: 'Art of the Stack'
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '6hVfFb9CbQAZm8tpAeQ9we',
              type: 'Entry',
              createdAt: '2020-05-20T19:14:19.064Z',
              updatedAt: '2020-05-31T01:09:24.901Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 4,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'lookImage'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'First test look image',
              images: {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'e48r2iwyjczp'
                    }
                  },
                  id: '5GJc6yjWnOktPFRbZyOm4a',
                  type: 'Entry',
                  createdAt: '2020-05-20T19:12:49.334Z',
                  updatedAt: '2020-05-20T19:12:49.334Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment'
                    }
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'responsiveImage'
                    }
                  },
                  locale: 'en-US'
                },
                fields: {
                  imageAltText: 'Very nice image',
                  mobilePicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583159270/editorial-lookbook/chain-reaction/look-1-shop-desktop.jpg',
                  tabletPicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583242846/editorial-lookbook/chain-reaction/look-1-shop-desktop-v2.jpg',
                  desktopPicture:
                    'https://res.cloudinary.com/mejuri-com/image/upload/v1583242846/editorial-lookbook/chain-reaction/look-1-shop-desktop-v2.jpg'
                }
              },
              imagePosition: 'Centre',
              legend: {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'This is a ',
                        nodeType: 'text'
                      },
                      {
                        data: {},
                        marks: [
                          {
                            type: 'bold'
                          }
                        ],
                        value: 'nice',
                        nodeType: 'text'
                      },
                      {
                        data: {},
                        marks: [],
                        value: ' text ',
                        nodeType: 'text'
                      },
                      {
                        data: {},
                        marks: [
                          {
                            type: 'italic'
                          }
                        ],
                        value: 'for testing',
                        nodeType: 'text'
                      },
                      {
                        data: {},
                        marks: [],
                        value: ' purposes | And also here is a ',
                        nodeType: 'text'
                      },
                      {
                        data: {
                          uri: 'https://mejuri.com'
                        },
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'link',
                            nodeType: 'text'
                          }
                        ],
                        nodeType: 'hyperlink'
                      },
                      {
                        data: {},
                        marks: [],
                        value: '',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'paragraph'
                  }
                ],
                nodeType: 'document'
              }
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '2WabY2RSq8lME72mLQ1nwL',
              type: 'Entry',
              createdAt: '2020-05-24T14:36:56.532Z',
              updatedAt: '2020-05-24T14:36:56.532Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'youtubeVideoModule'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'First Test Video Module',
              youtubeUrl: 'https://www.youtube.com/watch?v=1wXKjqM6YRg',
              legend: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'Cafe De Anatolia - Enta Omri (mix by Billy Esteban) - ',
                        marks: [
                          {
                            type: 'bold'
                          }
                        ],
                        data: {}
                      },
                      {
                        nodeType: 'text',
                        value: 'Dec 2 - ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'link',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri: 'https://www.youtube.com/watch?v=1wXKjqM6YRg'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: '',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value: '',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  }
                ]
              }
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '460VAR8x9QzgEtkUmlZkqy',
              type: 'Entry',
              createdAt: '2020-05-28T21:56:43.144Z',
              updatedAt: '2020-06-02T16:05:07.595Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 3,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'productGallery'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'First test',
              productSlugs: [
                'spiral-earrings',
                'twin-hoops',
                'sapphire-twin-hoops',
                'oversized-thin-hoops',
                'bold-hoops',
                'beaded-hoops-2',
                'large-hoops',
                'between-hoops',
                'unexistent-product'
              ],
              seeMoreButtonCopy: 'Show More ...'
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: 'sfiAMOcRMpihqK2dsM9tv',
              type: 'Entry',
              createdAt: '2020-05-27T21:31:21.140Z',
              updatedAt: '2020-05-27T21:31:21.140Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'lookIntro'
                }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Look 1 - Lorem ipsum',
              subtitle: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  }
                ]
              }
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '2of4q03HkoWiDMk2ZFkBs3',
              type: 'Entry',
              createdAt: '2020-05-28T14:42:15.852Z',
              updatedAt: '2020-05-28T14:42:15.852Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'longConfigurableText'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'First test',
              text: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'heading-2',
                    content: [
                      {
                        nodeType: 'text',
                        value: 'Try React',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'React has been designed from the start for gradual adoption, and ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'text',
                        value:
                          'you can use as little or as much React as you need.',
                        marks: [
                          {
                            type: 'bold'
                          }
                        ],
                        data: {}
                      },
                      {
                        nodeType: 'text',
                        value:
                          ' Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'heading-3',
                    content: [
                      {
                        nodeType: 'text',
                        value: '',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/docs/getting-started.html#online-playgrounds'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: 'Online Playgrounds',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'CodePen',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/redirect-to-codepen/hello-world'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: ', ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'CodeSandbox',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri: 'https://codesandbox.io/s/new'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: ', ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Glitch',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://glitch.com/edit/#!/remix/starter-react-template'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: ', or ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Stackblitz',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri: 'https://stackblitz.com/fork/react'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: '.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'If you prefer to use your own text editor, you can also ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'download this HTML file',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html'
                        }
                      },
                      {
                        nodeType: 'text',
                        value:
                          ', edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'heading-3',
                    content: [
                      {
                        nodeType: 'text',
                        value: '',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/docs/getting-started.html#add-react-to-a-website'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: 'Add React to a Website',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value: 'You can ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'add React to an HTML page in one minute',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/docs/add-react-to-a-website.html'
                        }
                      },
                      {
                        nodeType: 'text',
                        value:
                          '. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'heading-3',
                    content: [
                      {
                        nodeType: 'text',
                        value: '',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/docs/getting-started.html#create-a-new-react-app'
                        }
                      },
                      {
                        nodeType: 'text',
                        value: 'Create a New React App',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  },
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value: 'When starting a React project, a ',
                        marks: [],
                        data: {}
                      },
                      {
                        nodeType: 'hyperlink',
                        content: [
                          {
                            nodeType: 'text',
                            value: 'simple HTML page with script tags',
                            marks: [],
                            data: {}
                          }
                        ],
                        data: {
                          uri:
                            'https://reactjs.org/docs/add-react-to-a-website.html'
                        }
                      },
                      {
                        nodeType: 'text',
                        value:
                          ' might still be the best option. It only takes a minute to set up!',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  }
                ]
              }
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '7tC36jrDQZWTiQdYNdHZjX',
              type: 'Entry',
              createdAt: '2020-05-28T16:25:48.188Z',
              updatedAt: '2020-05-28T20:05:55.780Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 7,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'quote'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'Lorem Ipsum',
              text: {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'paragraph'
                  },
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: '',
                        nodeType: 'text'
                      }
                    ],
                    nodeType: 'paragraph'
                  }
                ],
                nodeType: 'document'
              }
            }
          },
          {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'e48r2iwyjczp'
                }
              },
              id: '6HdeFayxAe4NxC0DMYC9gl',
              type: 'Entry',
              createdAt: '2020-05-29T16:42:19.405Z',
              updatedAt: '2020-05-29T16:42:19.405Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'productGallery'
                }
              },
              locale: 'en-US'
            },
            fields: {
              identifier: 'Tests number 2',
              productSlugs: [
                'diamond-necklace-1',
                'solo-baguette-diamond-necklace',
                '360-necklace'
              ]
            }
          }
        ]
      }
    }
  ]
}

const componentGeneric = {
	"sys": {
		"type": "Array"
	},
	"total": 1,
	"skip": 0,
	"limit": 100,
	"items": [
		{
			"sys": {
				"space": {
					"sys": {
						"type": "Link",
						"linkType": "Space",
						"id": "e48r2iwyjczp"
					}
				},
				"type": "Entry",
				"id": "1egd1bENEWRUWOXBRVZEUq",
				"contentType": {
					"sys": {
						"type": "Link",
						"linkType": "ContentType",
						"id": "componentGeneric"
					}
				},
				"revision": 0,
				"createdAt": "2020-09-02T21:53:00.316Z",
				"updatedAt": "2020-09-03T16:00:40.972Z",
				"environment": {
					"sys": {
						"id": "staging",
						"type": "Link",
						"linkType": "Environment"
					}
				},
				"locale": "en-US"
			},
			"fields": {
				"name": "Test Component",
				"data": {
					"name": "",
					"cssByBreakpoint": [],
					"behaviours": [],
					"type": "container",
					"data": {
						"components": [
							{
								"name": "",
								"cssByBreakpoint": [],
								"behaviours": [],
								"type": "text",
								"data": {
									"content": "Holi"
								}
							},
							{
								"name": "",
								"cssByBreakpoint": [],
								"behaviours": [],
								"type": "grid",
								"data": {
									"gridConfigurations": [
										{
											"cols": [
												{
													"unit": "fr",
													"size": 1,
													"cssValue": "1fr"
												},
												{
													"unit": "fr",
													"size": 1,
													"cssValue": "1fr"
												}
											],
											"rows": [
												{
													"unit": "fr",
													"size": 1,
													"cssValue": "1fr"
												},
												{
													"unit": "fr",
													"size": 1,
													"cssValue": "1fr"
												}
											],
											"breakpoint": {
												"orientation": "all",
												"minWidth": 0
											}
										}
									],
									"componentGroups": [
										{
											"name": "Group 0",
											"cellsByBreakpoint": [
												{
													"breakpoint": {
														"orientation": "all",
														"minWidth": 0
													},
													"cols": {
														"start": 1,
														"end": 1
													},
													"rows": {
														"start": 1,
														"end": 1
													}
												}
											],
											"components": [
												{
													"name": "",
													"cssByBreakpoint": [],
													"behaviours": [],
													"type": "text",
													"data": {
														"content": "From Grid"
													}
												},
												{
													"name": "",
													"cssByBreakpoint": [],
													"behaviours": [],
													"type": "richText",
													"data": {
														"entryId": "3RYPImN3uwZ6itpqsvQ7bi"
													}
												}
											]
										}
									]
								}
							},
							{
								"name": "",
								"cssByBreakpoint": [],
								"behaviours": [],
								"type": "richText",
								"data": {
									"entryId": "2wvej6Me2lf1xPCt4RfQI"
								}
							}
						]
					}
				},
				"linkedEntries": [
					{
						"sys": {
							"space": {
								"sys": {
									"type": "Link",
									"linkType": "Space",
									"id": "e48r2iwyjczp"
								}
							},
							"type": "Entry",
							"id": "2wvej6Me2lf1xPCt4RfQI",
							"contentType": {
								"sys": {
									"type": "Link",
									"linkType": "ContentType",
									"id": "richTextGeneric"
								}
							},
							"revision": 0,
							"createdAt": "2020-09-03T14:57:28.295Z",
							"updatedAt": "2020-09-03T14:58:41.172Z",
							"environment": {
								"sys": {
									"id": "staging",
									"type": "Link",
									"linkType": "Environment"
								}
							},
							"locale": "en-US"
						},
						"fields": {
							"name": "RichTextoo",
							"content": {
								"nodeType": "document",
								"data": {},
								"content": [
									{
										"nodeType": "heading-1",
										"content": [
											{
												"nodeType": "text",
												"value": "The new Luxury",
												"marks": [],
												"data": {}
											}
										],
										"data": {}
									},
									{
										"nodeType": "paragraph",
										"content": [
											{
												"nodeType": "text",
												"value": "Look at this video: ",
												"marks": [],
												"data": {}
											},
											{
												"nodeType": "hyperlink",
												"content": [
													{
														"nodeType": "text",
														"value": "Wide Putin",
														"marks": [],
														"data": {}
													}
												],
												"data": {
													"uri": "https://www.youtube.com/watch?v=VQ7lKPSUc2g"
												}
											},
											{
												"nodeType": "text",
												"value": "",
												"marks": [],
												"data": {}
											}
										],
										"data": {}
									}
								]
							}
						}
					},
					{
						"sys": {
							"space": {
								"sys": {
									"type": "Link",
									"linkType": "Space",
									"id": "e48r2iwyjczp"
								}
							},
							"type": "Entry",
							"id": "3RYPImN3uwZ6itpqsvQ7bi",
							"contentType": {
								"sys": {
									"type": "Link",
									"linkType": "ContentType",
									"id": "richTextGeneric"
								}
							},
							"revision": 0,
							"createdAt": "2020-09-03T16:00:19.030Z",
							"updatedAt": "2020-09-03T16:00:33.300Z",
							"environment": {
								"sys": {
									"id": "staging",
									"type": "Link",
									"linkType": "Environment"
								}
							},
							"locale": "en-US"
						},
						"fields": {
							"name": "Riquito",
							"content": {
								"nodeType": "document",
								"data": {},
								"content": [
									{
										"nodeType": "paragraph",
										"content": [
											{
												"nodeType": "text",
												"value": "El Rick",
												"marks": [
													{
														"type": "bold"
													}
												],
												"data": {}
											}
										],
										"data": {}
									}
								]
							}
						}
					}
				]
			}
		}
	],
	"includes": {
		"Entry": [
			{
				"sys": {
					"space": {
						"sys": {
							"type": "Link",
							"linkType": "Space",
							"id": "e48r2iwyjczp"
						}
					},
					"type": "Entry",
					"id": "2wvej6Me2lf1xPCt4RfQI",
					"contentType": {
						"sys": {
							"type": "Link",
							"linkType": "ContentType",
							"id": "richTextGeneric"
						}
					},
					"revision": 0,
					"createdAt": "2020-09-03T14:57:28.295Z",
					"updatedAt": "2020-09-03T14:58:41.172Z",
					"environment": {
						"sys": {
							"id": "staging",
							"type": "Link",
							"linkType": "Environment"
						}
					},
					"locale": "en-US"
				},
				"fields": {
					"name": "RichTextoo",
					"content": {
						"nodeType": "document",
						"data": {},
						"content": [
							{
								"nodeType": "heading-1",
								"content": [
									{
										"nodeType": "text",
										"value": "The new Luxury",
										"marks": [],
										"data": {}
									}
								],
								"data": {}
							},
							{
								"nodeType": "paragraph",
								"content": [
									{
										"nodeType": "text",
										"value": "Look at this video: ",
										"marks": [],
										"data": {}
									},
									{
										"nodeType": "hyperlink",
										"content": [
											{
												"nodeType": "text",
												"value": "Wide Putin",
												"marks": [],
												"data": {}
											}
										],
										"data": {
											"uri": "https://www.youtube.com/watch?v=VQ7lKPSUc2g"
										}
									},
									{
										"nodeType": "text",
										"value": "",
										"marks": [],
										"data": {}
									}
								],
								"data": {}
							}
						]
					}
				}
			},
			{
				"sys": {
					"space": {
						"sys": {
							"type": "Link",
							"linkType": "Space",
							"id": "e48r2iwyjczp"
						}
					},
					"type": "Entry",
					"id": "3RYPImN3uwZ6itpqsvQ7bi",
					"contentType": {
						"sys": {
							"type": "Link",
							"linkType": "ContentType",
							"id": "richTextGeneric"
						}
					},
					"revision": 0,
					"createdAt": "2020-09-03T16:00:19.030Z",
					"updatedAt": "2020-09-03T16:00:33.300Z",
					"environment": {
						"sys": {
							"id": "staging",
							"type": "Link",
							"linkType": "Environment"
						}
					},
					"locale": "en-US"
				},
				"fields": {
					"name": "Riquito",
					"content": {
						"nodeType": "document",
						"data": {},
						"content": [
							{
								"nodeType": "paragraph",
								"content": [
									{
										"nodeType": "text",
										"value": "El Rick",
										"marks": [
											{
												"type": "bold"
											}
										],
										"data": {}
									}
								],
								"data": {}
							}
						]
					}
				}
			}
		]
	}
}

export const mockData = { lookPage, componentGeneric }
