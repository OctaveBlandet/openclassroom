import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: '420',
      content: '420, 4:20 ou 4/20 (prononcé four-twenty en anglais) est une expression utilisée en Amérique du Nord comme une référence à la consommation de cannabis et, par extension, une manière de s\'identifier à la contre-culture entourant le cannabis. Le 4/20 désigne aussi le moment de la journée où il est 16 h 20 (4:20 pm), moment propice, selon l\'expression, pour fumer un joint. Le 4/20 est aussi l\'appellation des divers rassemblements spontanés qui ont lieu à plusieurs endroits dans le monde à 16 h 20 le 20 avril (à 4 h 20 le 20 du 4e mois) et où les participants militent pour la remise en cause de la législation sur le cannabis afin de promouvoir la recherche et le développement le concernant. ',
      loveIts: 420,
      created_at: new Date(2019,3,20,16,20)
    },
    {
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, tristique faucibus risus id, euismod pretium augue. Donec orci magna, vehicula vitae rutrum at, pulvinar eu felis. Donec maximus dictum ex in finibus. Integer porta erat ac lorem rhoncus, vel aliquam nulla mattis. Morbi sit amet sagittis nulla.',
      loveIts: 0,
      created_at: new Date(2019,9,22,19,31)
    },
    {
      title: 'Dolor sit amet',
      content: 'Nulla ornare elit vel turpis ultrices hendrerit. Nunc in ullamcorper neque. Proin tellus nisi, suscipit ut cursus ac, luctus quis nisi. Etiam congue ante sed commodo volutpat. Suspendisse eu lobortis metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut sagittis quam, et fringilla velit. Fusce ut nibh urna.',
      loveIts: -1,
      created_at: new Date(2019,10,10,17,12)
    }
  ];
}
