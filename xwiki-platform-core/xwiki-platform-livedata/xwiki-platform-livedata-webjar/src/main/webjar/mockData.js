/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */


// This is mock data used while the front-end is not communicating with the macros
// The data structure is not definitive, and may change to match the final specs

define({

  id: "LD0",

  query: {
    properties: ["doc_date", "doc_title", "age", "country", "tags", "other", "_actions"],

    source: {
      id: "...",
      url: "...",
    },

    hiddenFilters: {},

    filters: [
      {
        property: "country",
        matchAll: true,
        constraints: [
          {operator: "equals", value: "france"},
        ],
      },
    ],

    sort: [ {property: "age", descending: false} ],

    offset: 0,
    limit: 25,

  },



  meta: {

    defaultLayout: "table",

    layouts: [
      {
        id: "table",
        name: "Table",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-table"},
      },
      {
        id: "cards",
        name: "Cards",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-th"},
        titleProperty: "doc_title",
      },
    ],

    propertyDescriptors: [
      {
        id: "doc_date",
        name: "Date",
        type: "date",
        visible: true,
        editable: false,
      },
      {
        id: "doc_title",
        name: "Name",
        type: "string",
        visible: true,
        displayer: {
          id: "link",
          propertyHref: "doc_url",
        },
      },
      {
        id: "age",
        name: "Age",
        type: "number",
        visible: true,
      },
      {
        id: "tags",
        name: "Tags",
        type: "list",
        visible: true,
        filter: {
          id: "suggest",
          url: "http://localhost:8080/xwiki/rest/wikis/xwiki/classes/XWiki.DocumentClass/properties/author/values",
        },
      },
      {
        id: "country",
        name: "Country",
        type: "string",
        visible: true,
      },
      {
        id: "other",
        name: "Autre truc",
        type: "string",
        visible: true,
        displayer: {
          id: "html",
        },
        sortable: false,
        filterable: false,
      },
      {
        id: "_actions",
        name: "Actions",
        type: "_actions",
        visible: true,
      },
    ],

    propertyTypes: [
      {
        id: "string",
        name: "String",
        displayer: {
          id: "text",
        },
        sortable: true,
        filterable: true,
        filter: {
          id: "text"
        },
        editable: true,
      },
      {
        id: "number",
        name: "Number",
        displayer: {
          id: "number",
        },
        sortable: true,
        filterable: true,
        filter: {
          id: "number"
        },
        editable: true,
      },
      {
        id: "list",
        name: "List",
        displayer: {
          id: "list",
        },
        sortable: true,
        filterable: true,
        filter: {
          id: "list"
        },
        editable: true,
      },
      {
        id: "date",
        name: "Date",
        displayer: {
          id: "date",
        },
        sortable: true,
        filterable: true,
        filter: {
          id: "date"
        },
        editable: true,
      },
      {
        id: "_actions",
        name: "Actions",
        displayer: {
          id: "actions",
        },
        sortable: false,
        filterable: false,
        editable: false,
      },
    ],

    defaultFilter: "text",

    filters: [
      {
        id: "text",
        defaultOperator: "contains",
        operators: [
          { id: "contains", name: "Contains", },
          { id: "equals", name: "Equals", },
          { id: "nequals", name: "Not Equals", },
        ],
      },
      {
        id: "list",
        defaultOperator: "is",
        operators: [
          { id: "is", name: "Is", },
          { id: "nis", name: "Is Not", },
        ],
      },
      {
        id: "suggest",
        defaultOperator: "is",
        operators: [
          { id: "is", name: "Is in", },
          { id: "nis", name: "Is Not in", },
        ],
      },
      {
        id: "number",
        defaultOperator: "equals",
        operators: [
          { id: "equals", name: "=", },
          { id: "nequals", name: "≠", },
          { id: "lower", name: "<", },
          { id: "greater", name: ">", },
        ],
      },
      {
        id: "date",
        defaultOperator: "equals",
        operators: [
          { id: "equals", name: "Equals", },
          { id: "nequals", name: "Not Equals", },
          { id: "before", name: "Before", },
          { id: "after", name: "After", },
          { id: "isBetween", name: "Is between", },
        ],
      },
    ],

    defaultDisplayer: "text",

    displayers: [
      {
        id: "text",
      },
      {
        id: "link",
      },
      {
        id: "html",
      },
      {
        id: "date",
      },
      {
        id: "_actions",
      },
    ],


    pagination: {
      maxShownPages: 10,
      pageSizes: [10, 25, 50, 100, 250],
      showEntryRange: true,
      showNextPrevious: true,
      showFirstLast: false,
      showPageSizeDropdown: false,
    },


    entryDescriptor: {
      idProperty: "doc_url",
      propertySaveHref: "save_url",
      allowEditProperty: "editable",
    },

    actions: [
      {
        id: "viewEntry",
        name: "View entry",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-eye"},
        propertyHref: "doc_url",
      },
      {
        id: "editEntry",
        name: "Edit entry",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-pencil"},
        propertyHref: "doc_edit_url",
      },
      {
        id: "editRights",
        name: "Edit rights",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-lock"},
        propertyHref: "doc_rights_url",
      },
      {
        id: "deleteEntry",
        name: "Delete entry",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-trash"},
        propertyHref: "doc_delete_url",
      },
      {
        id: "addEntry",
        name: "Add entry",
        icon: {iconSetName: "Font Awesome", cssClass: "fa fa-th"},
      },
    ],

    selection: {
      enabled: true,
    },

  },



  data: {

    count: 545,

    entries: [
      {
        "doc_url": "#link1",
        "doc_name": "Name1",
        "doc_date": "1585311780000",
        "doc_title": "Title 1",
        "doc_author": "Author 1",
        "doc_creationDate": "1585311660000",
        "doc_creator": "Creator 1",
        "age": 48,
        "tags": "Tag 1",
        "country": "France",
        "other": "<em>lorem ipsum<em>",
        "editable": false,
      },
      {
        "doc_url": "#link2",
        "doc_name": "Name2",
        "doc_date": "1587557220000",
        "doc_title": "Title 2",
        "doc_author": "Author 2",
        "doc_creationDate": "1587557160000",
        "doc_creator": "Creator 2",
        "age": 24,
        "tags": "Tag 2",
        "country": "France",
        "other": "<strong>dorol sit amet<strong>",
        "editable": true,
      },
      {
        "doc_url": "#link3",
        "doc_name": "Name3",
        "doc_date": "1585316040000",
        "doc_title": "Title 3",
        "doc_author": "Author 3",
        "doc_creationDate": "1585316040000",
        "doc_creator": "Creator 3",
        "age": 12,
        "tags": "Tag 3",
        "country": "Romania",
        "other": "<span style='color:red'>consequtir</span>",
        "editable": true,
      },
      {
        "doc_url": "#link4",
        "doc_name": "Name4",
        "doc_date": "1585316040000",
        "doc_title": "Title 4",
        "doc_author": "Author 4",
        "doc_creationDate": "1585316040000",
        "doc_creator": "Creator 4",
        "age": 52,
        "country": "Romania",
        "editable": true,
      },
    ],

  },

});