import { giftContent } from './giftContent'

describe('giftContent', () => {
  it('has required unlock fields', () => {
    expect(giftContent.unlockTitle).toBeTruthy()
    expect(giftContent.unlockButtonLabel).toBe('ver presente')
  })

  it('has a valid relationship start date', () => {
    const date = new Date(giftContent.relationshipStartDate)
    expect(date.getTime()).not.toBeNaN()
  })

  it('has music metadata', () => {
    expect(giftContent.music.title).toBeTruthy()
    expect(giftContent.music.audioSrc).toContain('Foi assim')
  })

  it('has message content', () => {
    expect(giftContent.messageTitle).toBeTruthy()
    expect(giftContent.messageBody).toBeTruthy()
  })

  it('has unique media IDs when moments are populated', () => {
    const ids = giftContent.moments.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('uses correct base path for audio and cover assets', () => {
    expect(giftContent.music.audioSrc).toContain('/dia_dos_Namorados/')
    expect(giftContent.music.coverSrc).toContain('/dia_dos_Namorados/')
    expect(giftContent.coupleCard.photoSrc).toContain('/dia_dos_Namorados/')
  })
})
