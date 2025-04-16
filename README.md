# MMM-MyStandings

A [MagicMirror²](https://magicmirror.builders/) module to display 

## Preview

![screenshot](screenshot.png)

## Installing the Module

```bash
cd ~/MagicMirror/modules
git clone https://github.com/dathbe/MMM-SunMap
```

No dependencies required!

## Updating the Module

```bash
cd ~/MagicMirror/modules/MMM-SunMap
git pull
```

## Configuration

Add MMM-SunMap module to the `modules` array in the `config/config.js` file. The following example config shows a minimal configuration option. More options are described below.

```javascript
{
  module: "MMM-SunMap",
  position: "bottom_right",
  config: {
    maxWidth: 400,
  }
},
```

| Option           | Description
| -------          |  -------
| maxWidth         | The width of the image.<br><br>**Type:** `int`<br> **Default value:** `450`
| fadeSpeed        | Fade time when the image refreshes<br><br>**Type:** `int` <br> **Default value:** `500` (.5 seconds)
| updateInterval   | Time (in seconds) between image updates.<br><br>**Type:** `int`<br> **Default value:** `15 * 60` (15 minutes)

## Contributing

If you find any problems, bugs or have questions, please [open a GitHub issue](https://github.com/dathbe/MMM-MySunMap/issues) in this repository.

Pull requests are of course also very welcome 🙂

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

### Developer commands

You will need to first install the dev dependencies:

```bash
cd ~/MagicMirror/modules/MMM-SunMap
npm install
```

- `npm run lint` - Run linting checks.
- `npm run lint:fix` - Fix automatically fixable linting errors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
