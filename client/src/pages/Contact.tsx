import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // TODO: replace with your real contact email before launch
  const CONTACT_EMAIL = 'contact@expertportfolio.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setError(language === 'cn' ? '请填写所有必填项。' : 'Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(language === 'cn' ? '邮箱格式不正确，请检查。' : 'Please enter a valid email address.');
      return;
    }
    setError('');

    // No backend wired up yet: open the visitor's mail client with a
    // prefilled message as an interim solution.
    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(`[网站留言] ${subject}`)}` +
      `&body=${encodeURIComponent(`${message}\n\n—— ${name} <${email}>`)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-20 md:pt-24"></div>

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'cn' ? '联系我' : 'Get in Touch'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'cn'
              ? '欢迎讨论战略合作、投资机遇和商务合作'
              : 'Open to strategic discussions, investment opportunities, and professional collaboration'}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {language === 'cn' ? '联系方式' : 'Contact Information'}
              </h2>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <Mail className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'cn' ? '邮箱' : 'Email'}
                  </h3>
                </div>
                <a
                  href="mailto:contact@expertportfolio.com"
                  className="text-gray-600 hover:text-slate-900 transition-colors"
                >
                  contact@expertportfolio.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <Linkedin className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-slate-900 transition-colors"
                >
                  {language === 'cn' ? '访问我的LinkedIn' : 'Visit my LinkedIn'}
                </a>
              </div>

              {/* WeChat */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <MessageSquare className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">WeChat</h3>
                </div>
                <p className="text-gray-600">
                  {language === 'cn' ? '请通过邮件或表单留言' : 'Please reach out via email or form'}
                </p>
              </div>

              {/* Availability */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  {language === 'cn'
                    ? '通常在24小时内回复'
                    : 'Typically respond within 24 hours'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'cn' ? '感谢您的消息！' : 'Thank You!'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'cn'
                        ? '已为您打开邮件客户端，请点击发送完成留言，我会尽快回复。'
                        : 'Your mail client has been opened — hit send to deliver your message. I will get back to you shortly.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {language === 'cn' ? '姓名' : 'Name'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder={language === 'cn' ? '请输入您的姓名' : 'Enter your name'}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {language === 'cn' ? '邮箱' : 'Email'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder={language === 'cn' ? '请输入您的邮箱' : 'Enter your email'}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {language === 'cn' ? '主题' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder={language === 'cn' ? '请输入主题' : 'Enter subject'}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {language === 'cn' ? '消息' : 'Message'}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                        placeholder={language === 'cn' ? '请输入您的消息' : 'Enter your message'}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    {error && (
                      <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {error}
                      </p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-slate-900 text-white hover:bg-slate-800 font-semibold py-3"
                    >
                      {language === 'cn' ? '发送消息' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Note */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'cn' ? '合作机遇' : 'Collaboration Opportunities'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'cn'
              ? '我对战略合作、投资机遇和商务咨询持开放态度。无论您是寻求投资管理建议、战略规划支持，还是并购整合指导，我都很乐意进行深入讨论。'
              : 'I am open to strategic collaboration, investment opportunities, and business consulting. Whether you seek investment management advice, strategic planning support, or M&A integration guidance, I welcome in-depth discussions.'}
          </p>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {language === 'cn' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-8">
            {language === 'cn' ? (
              <>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    您通常多久回复消息？
                  </h3>
                  <p className="text-gray-600">
                    我通常在24小时内回复所有咨询。如果是紧急事项，请在邮件主题中标注"紧急"。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    您提供哪些类型的咨询服务？
                  </h3>
                  <p className="text-gray-600">
                    我主要提供投资管理、战略规划、并购整合和风险控制方面的咨询服务。详见"专业能力"页面。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    如何安排咨询？
                  </h3>
                  <p className="text-gray-600">
                    请通过联系表单或邮件说明您的需求，我会根据具体情况安排时间进行讨论。
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How quickly do you typically respond to inquiries?
                  </h3>
                  <p className="text-gray-600">
                    I typically respond to all inquiries within 24 hours. For urgent matters, please mark "Urgent" in the email subject.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What types of consulting services do you provide?
                  </h3>
                  <p className="text-gray-600">
                    I primarily provide consulting services in investment management, strategic planning, M&A integration, and risk control. See the "Expertise" page for details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I schedule a consultation?
                  </h3>
                  <p className="text-gray-600">
                    Please use the contact form or email to describe your needs, and I will arrange a time to discuss based on your specific situation.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
