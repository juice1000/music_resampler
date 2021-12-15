import make_download from "./BufferToWave";

export default function Resampler(file) {

  let context = new AudioContext({
    numberOfChannels: 2,
    sampleRate: 32000,
  });
  

  let buffer_source = null;
  const reader = new FileReader();
  reader.onload = (fr) => {
    buffer_source = fr.target.result;
    context.decodeAudioData(fr.target.result, async function(buffer) {
    console.log(buffer)
    make_download(buffer, buffer.length, file.name);

    }).catch(function(err) {
      'Error rendering Buffer'
    })
  }
  reader.onerror = () => {
    console.log(this.ev);
  };
  reader.readAsArrayBuffer(file);
  if (buffer_source != null){
      console.log("we're here")
    console.log(buffer_source.numberOfChannels)
  }



  return console.log(0);
}
