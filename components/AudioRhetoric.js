export default function AudioRhetoric() {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Short clips with commentary on ethos, pathos, logos—and how model outputs shift across prompts.
      </p>
      <audio controls className="w-full">
        <source src="/audio/rhetoric-sample.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="text-sm text-gray-500">
        Place your file at <code>/public/audio/rhetoric-sample.mp3</code>.
      </p>
    </div>
  );
}
