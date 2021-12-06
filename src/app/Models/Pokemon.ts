
   interface Ability2 {
      name: string;
      url: string;
  }

   interface Ability {
      ability: Ability2;
      is_hidden: boolean;
      slot: number;
  }

   interface Form {
      name: string;
      url: string;
  }

   interface Version {
      name: string;
      url: string;
  }

   interface GameIndice {
      game_index: number;
      version: Version;
  }

   interface Item {
      name: string;
      url: string;
  }

   interface Version2 {
      name: string;
      url: string;
  }

   interface VersionDetail {
      rarity: number;
      version: Version2;
  }

   interface HeldItem {
      item: Item;
      version_details: VersionDetail[];
  }

   interface Move2 {
      name: string;
      url: string;
  }

   interface MoveLearnMethod {
      name: string;
      url: string;
  }

   interface VersionGroup {
      name: string;
      url: string;
  }

   interface VersionGroupDetail {
      level_learned_at: number;
      move_learn_method: MoveLearnMethod;
      version_group: VersionGroup;
  }

   interface Move {
      move: Move2;
      version_group_details: VersionGroupDetail[];
  }

   interface Species {
      name: string;
      url: string;
  }

   interface DreamWorld {
      front_default: string;
      front_female?: any;
  }

   interface Home {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface OfficialArtwork {
      front_default: string;
  }

   interface Other {
      dream_world: DreamWorld;
      home: Home;
      official_artwork: OfficialArtwork;
  }

   interface RedBlue {
      back_default: string;
      back_gray: string;
      back_transparent: string;
      front_default: string;
      front_gray: string;
      front_transparent: string;
  }

   interface Yellow {
      back_default: string;
      back_gray: string;
      back_transparent: string;
      front_default: string;
      front_gray: string;
      front_transparent: string;
  }

   interface GenerationI {
      red_blue: RedBlue;
      yellow: Yellow;
  }

   interface Crystal {
      back_default: string;
      back_shiny: string;
      back_shiny_transparent: string;
      back_transparent: string;
      front_default: string;
      front_shiny: string;
      front_shiny_transparent: string;
      front_transparent: string;
  }

   interface Gold {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      front_transparent: string;
  }

   interface Silver {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      front_transparent: string;
  }

   interface GenerationIi {
      crystal: Crystal;
      gold: Gold;
      silver: Silver;
  }

   interface Emerald {
      front_default: string;
      front_shiny: string;
  }

   interface FireredLeafgreen {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
  }

   interface RubySapphire {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
  }

   interface GenerationIii {
      emerald: Emerald;
      firered_leafgreen: FireredLeafgreen;
      ruby_sapphire: RubySapphire;
  }

   interface DiamondPearl {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface HeartgoldSoulsilver {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface Platinum {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface GenerationIv {
      diamond_pearl: DiamondPearl;
      heartgold_soulsilver: HeartgoldSoulsilver;
      platinum: Platinum;
  }

   interface Animated {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface BlackWhite {
      animated: Animated;
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface GenerationV {
      black_white: BlackWhite;
  }

   interface OmegarubyAlphasapphire {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface XY {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface GenerationVi {
      omegaruby_alphasapphire: OmegarubyAlphasapphire;
      x_y: XY;
  }

   interface Icons {
      front_default: string;
      front_female?: any;
  }

   interface UltraSunUltraMoon {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
  }

   interface GenerationVii {
      icons: Icons;
      ultra_sun_ultra_moon: UltraSunUltraMoon;
  }

   interface Icons2 {
      front_default: string;
      front_female: string;
  }

   interface GenerationViii {
      icons: Icons2;
  }

   interface Versions {
      generation_i: GenerationI;
      generation_ii: GenerationIi;
      generation_iii: GenerationIii;
      generation_iv: GenerationIv;
      generation_v: GenerationV;
      generation_vi: GenerationVi;
      generation_vii: GenerationVii;
      generation_viii: GenerationViii;
  }

   interface Sprites {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
      other: Other;
      versions: Versions;
  }

   interface Stat2 {
      name: string;
      url: string;
  }

   interface Stat {
      base_stat: number;
      effort: number;
      stat: Stat2;
  }

   interface Type2 {
      name: string;
      url: string;
  }

   interface Type {
      slot: number;
      type: Type2;
  }

   export interface Pokemon {
      abilities: Ability[];
      base_experience: number;
      forms: Form[];
      game_indices: GameIndice[];
      height: number;
      held_items: HeldItem[];
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      moves: Move[];
      name: string;
      order: number;
      past_types: any[];
      species: Species;
      sprites: Sprites;
      stats: Stat[];
      types: Type[];
      weight: number;
  }



