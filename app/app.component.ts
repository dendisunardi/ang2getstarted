import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
		<label>Name: </label>
		<input (ngModel)="hero.name" placeholder="Name" >
	</div>
	`
})

export class AppComponent{
	title = 'Tour of heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}

