import { FFmpeg } from '@ffmpeg/ffmpeg';
import coreURL from '../ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
    const instance = ffmpeg ?? new FFmpeg()

    if (!instance.loaded) {
        await instance.load({ coreURL, wasmURL, workerURL })
    }

    return instance
}
