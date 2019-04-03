import React from 'react';

class Area {
  name: string;
  areaID: int;

  constructor(name, id) {
    this.name = name;
    this.areaID = id;
    console.log(this.name);
  }
}

module.exports = Area;
